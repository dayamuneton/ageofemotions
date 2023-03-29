import Stripe from "stripe";
import { getFirebaseSubscriberData } from "@/utils/getFirebaseSubscriberData";
import subscribeToGetGiftCard from "@/utils/mailerliteSubscribeToGetGiftCard";
import { subscribeToGroup } from "@/utils/mailerliteSubscribeToGroup";
import { arrayUnion, doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "@/utils/firebaseConfig";
import { reportPurchaseEvent } from "@/apiUtils/convertions/events";
import generateUniqueCodeInCollection from "@/utils/generateUniqueCodeInCollection";
import { processCartOrder } from "./processCartOrder";

interface CheckoutSessionCompleted extends Stripe.Event.Data.Object {
   customer_details: {
      name: string;
      email: string;
   };
   id: string;
   cancel_url: string;
   amount_total: number;
   client_reference_id: string;
}
const checkoutSessionCompletedEvent = async (checkoutSessionObject: any) => {
   const checkoutSession = checkoutSessionObject as CheckoutSessionCompleted;

   console.log(checkoutSession);

   const checkoutSessionId = checkoutSession.id;

   if (checkoutSession.client_reference_id !== "no_cart_id") {
      await processCartOrder({
         cartId: checkoutSession.client_reference_id,
         name: checkoutSession.customer_details.name,
         amountTotal: checkoutSession.amount_total,
         cancel_url: checkoutSession.cancel_url,
      });
      return;
   }

   let subscriberData = await getFirebaseSubscriberData(checkoutSessionId);

   if (!subscriberData) {
      subscriberData = {
         ...checkoutSession.customer_details,
         mailerlite_group: "",
         id: checkoutSession.customer_details.email,
      };
   }

   console.log("log", "subscriberData", subscriberData);

   if (subscriberData.pendingMember) {
      const id = subscriberData.id;

      const userRef = doc(db, "users", id);

      await updateDoc(userRef, {
         pendingMember: false,
         isMember: true,
      });

      console.log("log ", `nuevo miembro ${id}`);

      return;
   }

   if (subscriberData.getGiftCard) {
      const id = subscriberData.id;

      const code = await generateUniqueCodeInCollection("giftcardcodes", 10);

      const userRef = doc(db, "users", id);

      await subscribeToGetGiftCard(id, code);

      await updateDoc(userRef, {
         giftCardCodes: arrayUnion(code),
         getGiftCard: false,
      });

      const docRef = doc(db, "giftcardcodes", code);

      await setDoc(docRef, {
         redeemed: false,
         buyerEmail: id,
      });

      console.log(`log, buyer ${id}, code ${code}`);
      return;
   }

   const purchaseEventCustomerName =
      subscriberData.name?.split(" ")[0] ||
      checkoutSession.customer_details.name?.split(" ")[0] ||
      "";
   const amountTotal = checkoutSession.amount_total;

   await reportPurchaseEvent(
      checkoutSession.cancel_url,
      subscriberData.id,
      purchaseEventCustomerName,
      amountTotal
   );

   await subscribeToGroup(
      subscriberData.id,
      subscriberData.name,
      subscriberData.mailerlite_group
   );

   await updateDoc(doc(db, "users", subscriberData.id), {
      purchaseMade: true,
      mailerlite_group: "",
   });
   return;
};
export default checkoutSessionCompletedEvent;

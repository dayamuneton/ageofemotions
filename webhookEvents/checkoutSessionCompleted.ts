import Stripe from "stripe";
import { getFirebaseSubscriberData } from "@utils/getFirebaseSubscriberData";
import subscribeToGetGiftCard from "@utils/mailerliteSubscribeToGetGiftCard";
import { subscribeToGroup } from "@utils/mailerliteSubscribeToGroup";
import generateUniqueGiftCardCode from "@utils/generateUniqueGiftCardCode";
import { arrayUnion, doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "@utils/firebaseConfig";
import { reportPurchaseEvent } from "@pixelEvents/events";

interface CheckoutSessionCompleted extends Stripe.Event.Data.Object {
   customer_details: {
      name: string;
      email: string;
   };
   id: string;
   cancel_url: string;
   amount_total: number;
}
const checkoutSessionCompletedEvent = async (checkoutSessionObject: any) => {
   const checkoutSession = checkoutSessionObject as CheckoutSessionCompleted;

   console.log(checkoutSession);

   const checkoutSessionId = checkoutSession.id;

   let subscriberData = await getFirebaseSubscriberData(checkoutSessionId);

   if (!subscriberData) {
      subscriberData = {
         ...checkoutSession.customer_details,
         mailerlite_group: "",
      };
   }

   console.log("log", "subscriberData", subscriberData);

   if (subscriberData.getGiftCard) {
      const email = subscriberData.email;

      const code = await generateUniqueGiftCardCode();

      const userRef = doc(db, "users", email);

      await subscribeToGetGiftCard(email, code);

      await updateDoc(userRef, {
         giftCardCodes: arrayUnion(code),
         getGiftCard: false,
      });

      const docRef = doc(db, "giftcardcodes", code);

      await setDoc(docRef, {
         redeemed: false,
         buyerEmail: email,
      });

      console.log(`log, buyer ${email}, code ${code}`);
      return;
   }

   const purchaseEventCustomerName =
      subscriberData.name?.split(" ")[0] ||
      checkoutSession.customer_details.name?.split(" ")[0] ||
      "";
   const amountTotal = checkoutSession.amount_total;

   await reportPurchaseEvent(
      checkoutSession.cancel_url,
      subscriberData.email,
      purchaseEventCustomerName,
      amountTotal
   );

   await subscribeToGroup(
      subscriberData.email,
      subscriberData.name,
      subscriberData.mailerlite_group
   );
   return;
};
export default checkoutSessionCompletedEvent;

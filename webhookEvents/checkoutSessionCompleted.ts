import Stripe from "stripe";
import { getFirebaseSubscriberData } from "@utils/getFirebaseSubscriberData";
import subscribeToGetGiftCard from "@utils/mailerliteSubscribeToGetGiftCard";
import { subscribeToPartOne } from "@utils/mailerliteSubscribeToPartOne";
import generateUniqueGiftCardCode from "@utils/generateUniqueGiftCardCode";
import { arrayUnion, doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "@utils/firebaseConfig";

interface CheckoutSessionCompleted extends Stripe.Event.Data.Object {
   customer_details: {
      name: string;
      email: string;
   };
   id: string;
}
const checkoutSessionCompletedEvent = async (checkoutSessionObject: any) => {
   const checkoutSession = checkoutSessionObject as CheckoutSessionCompleted;

   const checkoutSessionId = checkoutSession.id;

   let subscriberData = await getFirebaseSubscriberData(checkoutSessionId);

   if (!subscriberData) {
      subscriberData = checkoutSession.customer_details;
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
   await subscribeToPartOne(subscriberData.email, subscriberData.name);
   return;
};
export default checkoutSessionCompletedEvent;

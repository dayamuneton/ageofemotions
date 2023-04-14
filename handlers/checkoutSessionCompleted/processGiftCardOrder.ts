import { db } from "@/integrations/firebase/firebaseConfig";
import { generateUniqueCodeInCollection } from "@/integrations/firebase/generateUniqueCodeInCollection";
import { subscribeCustomerToGiftCardGroup } from "@/integrations/mailerlite";
import { arrayUnion, doc, setDoc, updateDoc } from "firebase/firestore";

export const processGiftCardOrder = async ({ email }: { email: string }) => {
   try {
      const code = await generateUniqueCodeInCollection("giftcardcodes", 10);

      const userRef = doc(db, "users", email);

      await subscribeCustomerToGiftCardGroup(email, code);

      await updateDoc(userRef, {
         giftCardCodes: arrayUnion(code),
      });

      const docRef = doc(db, "giftcardcodes", code);

      await setDoc(docRef, {
         redeemed: false,
         buyerEmail: email,
      });

      console.log(`log, buyer ${email}, code ${code}`);
      return;
   } catch (error) {
      console.error(error);
      throw error;
   }
};

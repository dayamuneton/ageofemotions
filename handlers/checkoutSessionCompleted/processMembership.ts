import { db } from "@/services/firebase/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";

export const processMembership = async ({ email }: { email: string }) => {
   try {
      const userRef = doc(db, "users", email);

      await updateDoc(userRef, {
         isMember: true,
      });

      console.log("log ", `nuevo miembro ${email}`);

      return;
   } catch (error) {
      console.error(error);
      throw error;
   }
};

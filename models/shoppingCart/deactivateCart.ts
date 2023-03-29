import { db } from "@/utils/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";

export const deactivateCart = async (cartId: string) => {
   try {
      const cartDoc = doc(db, "shoppingCarts", cartId);

      await updateDoc(cartDoc, {
         isActive: false,
      });
   } catch (error) {
      console.error("Error deactivating cart: ", error);
      throw new Error("Could not deactivate cart.");
   }
};

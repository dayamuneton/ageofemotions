import { shoppingCartConverter } from "@/models/shoppingCart";
import { db } from "@/utils/firebaseConfig";
import { subscribeToGroup } from "@/utils/mailerliteSubscribeToGroup";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { reportPurchaseEvent } from "../convertions/events";

export const processCartOrder = async ({
   cartId,
   name,
   amountTotal,
   cancel_url,
}: {
   cartId: string;
   name: string;
   amountTotal: number;
   cancel_url: string;
}) => {
   try {
      const cartDoc = doc(db, "shoppingCarts", cartId).withConverter(
         shoppingCartConverter
      );

      const cartSnapshot = await getDoc(cartDoc);

      if (!cartSnapshot.exists()) return;

      const cartData = cartSnapshot.data();
      const email = cartData.customerEmail;

      for (let index = 0; index < cartData.cartItems.length; index++) {
         const mailerlite_group = cartData.cartItems[index].mailerlite_group;
         await subscribeToGroup(email, name, mailerlite_group);
      }

      await reportPurchaseEvent(cancel_url, email, name, amountTotal);

      await updateDoc(cartDoc, {
         isProcessed: true,
      });

      console.log("log", "cart processed", cartId, cartData);
   } catch (error) {
      console.error("Error processing cart order: ", error);
      throw new Error("Could not process cart order.");
   }
};

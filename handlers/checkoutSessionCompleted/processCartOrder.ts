import { pdfsOrderConverter } from "@/models/pdfsOrderModel";
import { db } from "@/services/firebase/firebaseConfig";
import { subscribeCustomerToGroups } from "@/services/mailerlite/subscribeCustomerToGroups";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export const processCartOrder = async ({ orderId }: { orderId: string }) => {
   try {
      const orderDoc = doc(db, "orders", orderId).withConverter(
         pdfsOrderConverter
      );

      const orderSnapshot = await getDoc(orderDoc);

      if (!orderSnapshot.exists()) return;

      const order = orderSnapshot.data();
      const email = order.email;
      const name = order.name;

      const mailerlite_groups = order.cartItems.map(
         (item) => item.mailerlite_group
      );

      await subscribeCustomerToGroups(email, name, mailerlite_groups);

      await updateDoc(orderDoc, {
         isProcessed: true,
      });

      console.log("log", "pdfs order processed", orderId, order);
   } catch (error) {
      console.error("Error processing pdfs order: ", error);
      throw new Error("Could not process cart order.");
   }
};

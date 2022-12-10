import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const getFirebaseSubscriberData = async (checkoutSessionId?: string) => {
   if (!checkoutSessionId) return;
   const usersRef = collection(db, "users");
   const usersQuery = query(
      usersRef,
      where("lastCheckoutSessionId", "==", checkoutSessionId)
   );
   const usersSnapshot = await getDocs(usersQuery);
   const subscriber = usersSnapshot.docs[0];

   if (!subscriber) return;

   const data = subscriber.data();

   return { ...data };
};

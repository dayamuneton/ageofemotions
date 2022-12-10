import {
   collection,
   DocumentData,
   getDocs,
   query,
   where,
} from "firebase/firestore";
import { db } from "./firebaseConfig";

export const getFirebaseSubscriberData = async (checkoutSessionId: string) => {
   const usersRef = collection(db, "users");
   const usersQuery = query(
      usersRef,
      where("lastCheckoutSessionId", "==", checkoutSessionId)
   );

   const usersSnapshot = await getDocs(usersQuery);

   let data: DocumentData = {};

   usersSnapshot.forEach((user) => {
      data = user.data();
   });

   return data;
};

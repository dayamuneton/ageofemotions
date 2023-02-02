import {
   collection,
   DocumentData,
   getDocs,
   query,
   where,
} from "firebase/firestore";
import { db } from "./firebaseConfig";

export interface UserInterface extends DocumentData {
   email: string;
   name: string;
   mailerlite_group: string;
   lastCheckoutSessionId?: string;
}

export const getFirebaseSubscriberData = async (checkoutSessionId?: string) => {
   if (!checkoutSessionId) return;

   const usersRef = collection(db, "users");
   const usersQuery = query(
      usersRef,
      where("lastCheckoutSessionId", "==", checkoutSessionId)
   );

   const usersSnapshot = await getDocs(usersQuery);

   if (usersSnapshot.empty) return;

   let data = usersSnapshot.docs[0].data() as UserInterface;

   return data;
};

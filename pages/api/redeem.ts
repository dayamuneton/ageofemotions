import { db } from "@utils/firebaseConfig";
import { subscribeToPartOne } from "@utils/mailerliteSubscribeToPartOne";
import {
   arrayRemove,
   collection,
   CollectionReference,
   doc,
   getDoc,
   getDocs,
   query,
   setDoc,
   updateDoc,
   where,
} from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";

const checkIfCodeIsRedeemed = async (code: string) => {
   const codeRef = doc(db, "redeemedCodes", code);

   const codeSnapshot = await getDoc(codeRef);

   return codeSnapshot.exists();
};

const clearCodeFromFieldIfItExist = async (
   usersRef: CollectionReference,
   code: string
) => {
   const usersQuery = query(
      usersRef,
      where("giftCardCodes", "array-contains", code)
   );

   const usersSnapshot = await getDocs(usersQuery);

   if (usersSnapshot.empty) return false;

   const userRef = usersSnapshot.docs[0].ref;

   await updateDoc(userRef, {
      giftCardCodes: arrayRemove(code),
   });

   const redeemedCodeRef = doc(db, "redeemedCodes", code);

   await setDoc(redeemedCodeRef, {
      redeemed: true,
   });

   return true;
};

const RedeemGiftCard = async (req: NextApiRequest, res: NextApiResponse) => {
   if (req.method !== "POST") {
      res.status(405).send("Method Not Allowed");
   }

   const { fullName, email, code } = req.body;

   const usersRef = collection(db, "users");

   let codeIsRedeemed = await checkIfCodeIsRedeemed(code);

   if (codeIsRedeemed) return;

   let codeExisted = await clearCodeFromFieldIfItExist(usersRef, code);

   if (!codeExisted) return;

   await subscribeToPartOne(email, fullName);

   res.status(200).send("OK");
};
export default RedeemGiftCard;

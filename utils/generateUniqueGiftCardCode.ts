import {
   collection,
   CollectionReference,
   getDocs,
   query,
   where,
} from "firebase/firestore";
import { db } from "./firebaseConfig";

const generateRandomString = (length: number) => {
   const characters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

   let result = "";
   for (let i = 0; i < length; i++) {
      result += characters.charAt(
         Math.floor(Math.random() * characters.length)
      );
   }
   return result;
};

const isCodeInUseByAnUser = async (
   usersRef: CollectionReference,
   code: string
) => {
   const usersQuery = query(
      usersRef,
      where("giftCardCodes", "array-contains", code)
   );

   const usersSnapshot = await getDocs(usersQuery);

   return !usersSnapshot.empty;
};

const generateUniqueGiftCardCode = async () => {
   const usersRef = collection(db, "users");

   let code = "";
   let codeInUse = true;

   while (codeInUse) {
      code = generateRandomString(10);
      codeInUse = await isCodeInUseByAnUser(usersRef, code);
   }

   return code;
};

export default generateUniqueGiftCardCode;

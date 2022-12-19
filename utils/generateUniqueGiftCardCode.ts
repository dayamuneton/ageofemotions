import { doc, getDoc } from "firebase/firestore";
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

const giftCardCodeExists = async (code: string) => {
   const codeRef = doc(db, "giftcardcodes", code);

   const codeSnapshot = await getDoc(codeRef);

   return codeSnapshot.exists();
};

const generateUniqueGiftCardCode = async () => {
   let code = "";
   let codeInUse = true;

   while (codeInUse) {
      code = generateRandomString(10);
      codeInUse = await giftCardCodeExists(code);
   }

   return code;
};

export default generateUniqueGiftCardCode;

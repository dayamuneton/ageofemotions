import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const generateRandomString = (length: number) => {
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

export const docExistInCollection = async (id: string, collection: string) => {
   const codeRef = doc(db, collection, id);

   const codeSnapshot = await getDoc(codeRef);

   return codeSnapshot.exists();
};

export const generateUniqueCodeInCollection = async (
   collection: string,
   length: number
) => {
   let code = "";
   let codeInUse = true;

   while (codeInUse) {
      code = generateRandomString(length);
      codeInUse = await docExistInCollection(code, collection);
   }

   return code;
};

export default generateUniqueCodeInCollection;

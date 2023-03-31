import { generateRandomString } from "@/utils/generateRandomString";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

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

import { QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";

export class PdfsOrder {
   id: string;
   email: string;
   name: string;
   type: string;
   cartItems: any[];
   isProcessed: boolean;

   constructor({
      id,
      email,
      name,
      type,
      cartItems,
      isProcessed,
   }: {
      id: string;
      email: string;
      name: string;
      type: string;
      cartItems: any[];
      isProcessed: boolean;
   }) {
      this.id = id || "";
      this.email = email || "";
      this.name = name || "";
      this.type = type || "";
      this.cartItems = cartItems || [];
      this.isProcessed = isProcessed || false;
   }
}
export const pdfsOrderConverter = {
   toFirestore: (pdfsOrder: PdfsOrder) => {
      return {
         email: pdfsOrder.email,
         name: pdfsOrder.name,
         type: pdfsOrder.type,
         cartItems: pdfsOrder.cartItems,
         isProcessed: pdfsOrder.isProcessed,
         id: pdfsOrder.id,
      };
   },
   fromFirestore: (
      snapshot: QueryDocumentSnapshot,
      options: SnapshotOptions
   ) => {
      const data = snapshot.data(options);
      return new PdfsOrder({
         id: data.id,
         email: data.email,
         name: data.name,
         type: data.type,
         cartItems: data.cartItems,
         isProcessed: data.isProcessed,
      });
   },
};

import { ProductInterface } from "@components/checkoutpdf/checkoutForm";
import { useAuth } from "@context/authContext";
import { db } from "@utils/firebaseConfig";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import MemebresiaProductCard from "./card";

function Galeria() {
   const [galeriaProducts, setGaleriaProducts] = useState<
      ProductInterface[] | null
   >(null);

   // const uploadProducts = async () => {
   //    for (const product of galeriaProducts) {
   //       const docRef = await doc(db, "pdf_products", product.link);
   //       await setDoc(docRef, product);
   //    }
   // };
   useEffect(() => {
      const comingSoonRef = collection(db, "pdf_products");
      const q = query(comingSoonRef, where("category", "!=", "coherentemente"));
      const unSubscribe = onSnapshot(q, (snapshot) => {
         const docs: any = [];
         snapshot.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id });
         });

         setGaleriaProducts(docs);
      });

      return unSubscribe;
   }, []);

   return (
      <div className="flex flex-col items-center w-full mt-8">
         <div className="grid grid-cols-1 lg:grid-cols-5 w-[90vw] max-w-6xl">
            {galeriaProducts?.map((product: ProductInterface) => (
               <MemebresiaProductCard
                  key={product.photoURL}
                  product={product}
               />
            ))}
         </div>
      </div>
   );
}

export default Galeria;

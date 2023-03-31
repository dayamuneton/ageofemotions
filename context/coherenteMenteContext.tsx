import React, { createContext, useContext, useState, useEffect } from "react";
import { db } from "@/services/firebase/firebaseConfig";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useAuth } from "./authContext";
import { Product, productConverter } from "@/models/productModel";

interface CoherenteMenteContextProps {
   coherentementeProducts: Product[] | null;
   setCoherentementeProducts: React.Dispatch<
      React.SetStateAction<Product[] | null>
   >;
}

const CoherenteMenteContext = createContext<CoherenteMenteContextProps | null>(
   null
);

export function useCoherenteMente() {
   return useContext(
      CoherenteMenteContext as React.Context<CoherenteMenteContextProps>
   );
}

export function CoherenteMenteProvider({
   children,
}: {
   children: React.ReactNode;
}) {
   const { profile } = useAuth();

   const [coherentementeProducts, setCoherentementeProducts] = useState<
      Product[] | null
   >(null);

   useEffect(() => {
      const coherentementeRef = collection(db, "pdf_products").withConverter(
         productConverter
      );

      const coherentementeQuery = query(
         coherentementeRef,
         where("category", "==", "coherentemente")
      );

      const unSubscribeCoherentemente = onSnapshot(
         coherentementeQuery,
         async (snapshot) => {
            try {
               const coherentementeDataPromises = snapshot.docs.map(
                  async (doc) => await doc.data().setPrice(profile?.isMember)
               );
               const coherentementeData = await Promise.all(
                  coherentementeDataPromises
               );
               setCoherentementeProducts(coherentementeData);
            } catch (error) {
               console.error(error);
            }
         }
      );

      return () => {
         unSubscribeCoherentemente();
      };
   }, [profile?.isMember]);

   const value = {
      coherentementeProducts,
      setCoherentementeProducts,
   };

   return (
      <CoherenteMenteContext.Provider value={value}>
         {children}
      </CoherenteMenteContext.Provider>
   );
}

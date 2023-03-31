import React, { createContext, useContext, useState, useEffect } from "react";
import { db } from "@/services/firebase/firebaseConfig";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useAuth } from "./authContext";
import { Product, productConverter } from "@/models/productModel";

interface GaleriaContextProps {
   galeriaProducts: Product[] | null;
   setGaleriaProducts: React.Dispatch<React.SetStateAction<Product[] | null>>;
   commingSoonProducts: Product[] | null;
   setCommingSoonProducts: React.Dispatch<
      React.SetStateAction<Product[] | null>
   >;
}

const GaleriaContext = createContext<GaleriaContextProps | null>(null);

export function useGaleria() {
   return useContext(GaleriaContext as React.Context<GaleriaContextProps>);
}

export function GaleriaProvider({ children }: { children: React.ReactNode }) {
   const { profile } = useAuth();
   const [galeriaProducts, setGaleriaProducts] = useState<Product[] | null>(
      null
   );
   const [commingSoonProducts, setCommingSoonProducts] = useState<
      Product[] | null
   >(null);

   useEffect(() => {
      const galeriaRef = collection(db, "pdf_products").withConverter(
         productConverter
      );
      const commingSoonRef = collection(db, "pdf_coming_soon").withConverter(
         productConverter
      );

      const galeriaQuery = query(
         galeriaRef,
         where("category", "!=", "coherentemente")
      );

      const unSubscribeCommingSoon = onSnapshot(commingSoonRef, (snapshot) => {
         const commingSoonData = snapshot.docs.map((doc) => doc.data()) || null;
         setCommingSoonProducts(commingSoonData);
      });

      const unSubscribeGaleria = onSnapshot(galeriaQuery, async (snapshot) => {
         try {
            const galeriaDataPromises = snapshot.docs.map(
               async (doc) => await doc.data().setPrice(profile?.isMember)
            );
            const galeriaData = await Promise.all(galeriaDataPromises);
            setGaleriaProducts(galeriaData);
         } catch (error) {
            console.error(error);
         }
      });

      return () => {
         unSubscribeGaleria();
         unSubscribeCommingSoon();
      };
   }, [profile]);

   const value = {
      galeriaProducts,
      setGaleriaProducts,
      commingSoonProducts,
      setCommingSoonProducts,
   };

   return (
      <GaleriaContext.Provider value={value}>
         {children}
      </GaleriaContext.Provider>
   );
}

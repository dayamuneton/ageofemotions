import React, { createContext, useContext, useState, useEffect } from "react";
import { db } from "@/integrations/firebase/firebaseConfig";
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

export function GaleriaProvider({
   children,
   galeria,
   commingSoon,
}: {
   children: React.ReactNode;
   galeria: string;
   commingSoon: string;
}) {
   const { profile } = useAuth();
   const [galeriaProducts, setGaleriaProducts] = useState<Product[] | null>(
      null
   );
   const [commingSoonProducts, setCommingSoonProducts] = useState<
      Product[] | null
   >(null);

   useEffect(() => {
      const parsedGaleria: Product[] = JSON.parse(galeria).map(
         (product: any) => new Product(product)
      );
      const parsedCommingSoon: Product[] = JSON.parse(commingSoon).map(
         (product: any) => new Product(product)
      );
      setCommingSoonProducts(parsedCommingSoon);

      const setPrices = async () => {
         try {
            const galeriaDataPromises = parsedGaleria?.map(
               async (product) => await product.setPrice(profile?.isMember)
            );
            const galeriaData = await Promise.all(galeriaDataPromises);

            setGaleriaProducts(galeriaData);
         } catch (error) {
            console.error(error);
         }
      };
      setPrices();
   }, [commingSoon, galeria, profile]);

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

import React, { createContext, useContext, useState, useEffect } from "react";
import { db } from "@/utils/firebaseConfig";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useAuth } from "./authContext";
import { ShoppingCart, shoppingCartConverter } from "../models/shoppingCart";
import { Product, productConverter } from "@/models/product";

interface ShopContextProps {
   shoppingCart: ShoppingCart | null;
   setShoppingCart: React.Dispatch<React.SetStateAction<ShoppingCart | null>>;
   galeriaProducts: Product[] | null;
   setGaleriaProducts: React.Dispatch<React.SetStateAction<Product[] | null>>;
   commingSoonProducts: Product[] | null;
   setCommingSoonProducts: React.Dispatch<
      React.SetStateAction<Product[] | null>
   >;
   coherentementeProducts: Product[] | null;
   setCoherentementeProducts: React.Dispatch<
      React.SetStateAction<Product[] | null>
   >;
}

const ShopContext = createContext<ShopContextProps | null>(null);

export function useShop() {
   return useContext(ShopContext as React.Context<ShopContextProps>);
}

export function ShopProvider({ children }: { children: React.ReactNode }) {
   const { currentUser, profile } = useAuth();
   const [shoppingCart, setShoppingCart] = useState<ShoppingCart | null>(null);
   const [galeriaProducts, setGaleriaProducts] = useState<Product[] | null>(
      null
   );
   const [commingSoonProducts, setCommingSoonProducts] = useState<
      Product[] | null
   >(null);
   const [coherentementeProducts, setCoherentementeProducts] = useState<
      Product[] | null
   >(null);

   useEffect(() => {
      const galeriaRef = collection(db, "pdf_products").withConverter(
         productConverter
      );
      const commingSoonRef = collection(db, "pdf_coming_soon").withConverter(
         productConverter
      );
      const coherentementeRef = collection(db, "pdf_products").withConverter(
         productConverter
      );

      const galeriaQuery = query(
         galeriaRef,
         where("category", "!=", "coherentemente")
      );
      const coherentementeQuery = query(
         coherentementeRef,
         where("category", "==", "coherentemente")
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
         unSubscribeGaleria();
         unSubscribeCommingSoon();
         unSubscribeCoherentemente();
      };
   }, [currentUser, profile]);

   useEffect(() => {
      if (!currentUser) {
         setShoppingCart(null);
         return;
      }

      const shoppingCartRef = collection(db, "shoppingCarts").withConverter(
         shoppingCartConverter
      );

      const shoppingCartQuery = query(
         shoppingCartRef,
         where("customerEmail", "==", currentUser?.email),
         where("isActive", "==", true)
      );

      const unSubscribeShoppingCart = onSnapshot(
         shoppingCartQuery,
         (snapshot) => {
            const shoppingCartData = snapshot.docs[0]?.data() || null;
            setShoppingCart(shoppingCartData);
         }
      );
      return () => {
         unSubscribeShoppingCart();
      };
   }, [currentUser]);

   const value = {
      shoppingCart,
      setShoppingCart,
      galeriaProducts,
      setGaleriaProducts,
      commingSoonProducts,
      setCommingSoonProducts,
      coherentementeProducts,
      setCoherentementeProducts,
   };

   return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

import { useAuth } from "@/context/authContext";
import { useShop } from "@/context/shopContext";
import { createPdfsCheckout } from "@/handlers/orders/createPdfsCheckout";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ContinueShopping from "./continueShopping";

function ShopNowButton() {
   const { currentUser } = useAuth();
   const { shoppingCart } = useShop();
   const router = useRouter();

   const redirectToCheckout = async () => {
      if (!shoppingCart?.cartItems?.[0] || !currentUser) return;
      try {
         const checkoutSession = await createPdfsCheckout({
            cartItems: shoppingCart.cartItems,
            email: currentUser.email,
            name: currentUser.displayName,
            cancel_url: "checkout",
            success_url: "gracias",
         });

         const url = checkoutSession.url;

         if (typeof url !== "string") return;

         router.push(url, "_blank");
      } catch (error) {
         console.error(error);
      }
   };
   if (!shoppingCart?.cartItems?.[0]) return <ContinueShopping />;
   return (
      <>
         <button
            className="w-full max-w-xl py-3 mt-2 text-2xl font-bold text-white bg-black"
            onClick={redirectToCheckout}
         >
            Compar ahora
         </button>
         <Link
            href="/shopguiaspdf"
            className="flex justify-center w-full max-w-xl py-3 mt-2 mb-8 text-2xl font-bold text-center text-white bg-black"
         >
            Seguir comprando
         </Link>
      </>
   );
}

export default ShopNowButton;

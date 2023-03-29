import { useAuth } from "@/context/authContext";
import { useShop } from "@/context/shopContext";
import { deactivateCart } from "@/models/shoppingCart/deactivateCart";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ContinueShopping from "./continueShopping";

function ShopNowButton() {
   const { currentUser } = useAuth();
   const { shoppingCart } = useShop();
   const router = useRouter();

   const redirectToCheckout = async () => {
      try {
         if (!shoppingCart?.cartItems?.[0]) return;

         const createCheckoutSessionPayload = {
            success_url: "gracias",
            cancel_url: "checkout",
            lineItems: shoppingCart?.cartItems,
            shopping_cart_id: shoppingCart?.id,
            email: currentUser?.email,
         };

         const response = await fetch(
            `${process.env.NEXT_PUBLIC_MY_DOMAIN}/api/create-checkout-session`,
            {
               method: "POST",
               headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
               },
               body: JSON.stringify(createCheckoutSessionPayload),
            }
         );
         const data = await response.json();
         const url = data.url;

         if (typeof url !== "string") return;

         await deactivateCart(shoppingCart?.id);

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

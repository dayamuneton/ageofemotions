import { useAuth } from "@/context/authContext";
import { useShop } from "@/context/shopContext";
import { Product } from "@/models/product";
import { addItemToCart } from "@/models/shoppingCart/addCartItem";
import { useRouter } from "next/router";
import React from "react";

function GetPDFButton({ product }: { product: Product }) {
   const { currentUser } = useAuth();
   const { shoppingCart } = useShop();
   const router = useRouter();

   async function handleAddToCart() {
      if (!currentUser) return;

      await addItemToCart(shoppingCart, product, currentUser.email);
   }

   const redirectToCheckout = () => {
      router.push(`/checkoutpdf/${product.handle}?psrc=membresia`);
   };

   return (
      <button
         onClick={currentUser ? handleAddToCart : redirectToCheckout}
         className="p-2 text-center border-2 border-black bg-yellow"
      >
         {currentUser ? "Agregar al carrito" : "Comprar ahora"}
      </button>
   );
}

export default GetPDFButton;

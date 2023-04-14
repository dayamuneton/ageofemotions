import React, { useCallback, useEffect, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { useAuth } from "@/context/authContext";
import Link from "next/link";
import { useShop } from "@/context/shopContext";

function ShoppingCart() {
   const { currentUser } = useAuth();
   const { shoppingCart } = useShop();
   const [cartQty, setCartQty] = useState<null | string>(null);

   const handleCartQty = (variantsLength?: number) => {
      if (!variantsLength || variantsLength === 0) return null;

      if (variantsLength > 9) return "9+";

      return variantsLength.toString();
   };

   useEffect(() => {
      if (!currentUser || !shoppingCart) return;

      let variantsLength = shoppingCart.cartItems?.length;

      setCartQty(handleCartQty(variantsLength));
   }, [shoppingCart, currentUser]);

   return (
      <div
         className={`${!currentUser && "hidden"} relative flex  !aspect-square`}
      >
         <Link
            href="/checkout"
            className="flex items-center justify-center !min-h-full  cursor-pointer !aspect-square  "
         >
            <ShoppingCartIcon className="flex text-gray-700" />
         </Link>
         {currentUser && cartQty && (
            <p className="absolute -bottom-2 -left-3 flex items-center justify-center p-1 text-[.6rem] text-white bg-red-600 rounded-full !aspect-square !w-5  !h-5">
               {cartQty}
            </p>
         )}
      </div>
   );
}

export default ShoppingCart;

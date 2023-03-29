import { useAuth } from "@/context/authContext";
import { useShop } from "@/context/shopContext";
import Link from "next/link";
import React from "react";
import CartItem from "./cartItem";
import TotalAmount from "./totalAmount";

function CartItems() {
   const { shoppingCart } = useShop();
   const { profile } = useAuth();

   // TODO getprices

   return (
      <div className="w-full">
         {shoppingCart?.cartItems?.map((item) => (
            <CartItem
               key={item.id}
               product={item}
               shoppingCart={shoppingCart}
               isMember={profile?.isMember ?? false}
            />
         ))}

         <TotalAmount subTotal={shoppingCart?.subTotal} />
      </div>
   );
}

export default CartItems;

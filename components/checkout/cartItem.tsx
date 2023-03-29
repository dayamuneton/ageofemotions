import { Product } from "@/models/product";
import { ShoppingCart } from "@/models/shoppingCart";
import { removeCartItem } from "@/models/shoppingCart/removeCartItem";
import Image from "next/image";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function CartItem({
   shoppingCart,
   product,
}: {
   product: Product;
   isMember: boolean;
   shoppingCart: ShoppingCart;
}) {
   return (
      <div className="relative flex items-center justify-center w-full max-w-xl p-2 mx-auto mb-2 bg-white rounded-2xl drop-shadow-sm lg:flex-row">
         <div className="flex items-center justify-center w-full">
            <span className="!aspect-square !w-[7rem] flex justify-center ">
               <Image
                  src={product.images[0]}
                  alt=""
                  fill
                  className="!relative !h-full !w-auto "
               />
            </span>
            <span className="w-full pl-0 mb-auto lg:pl-8">
               <p className="font-semibold capitalize ">{product.title}</p>
               <p className="max-w-xs text-sm "> {product.description} </p>
            </span>
         </div>
         <div className="flex mt-auto">
            <div className="flex items-end font-medium">
               <p className="">
                  {product.price_in_dollars.toLocaleString("en-US", {
                     style: "currency",
                     currency: "USD",
                  })}{" "}
               </p>
               <p className="ml-1">USD</p>
            </div>
            <button
               className="mx-2 text-gray-700 hover:text-red-600"
               onClick={() => removeCartItem(shoppingCart, product)}
            >
               <DeleteIcon />
            </button>
         </div>
      </div>
   );
}

export default CartItem;

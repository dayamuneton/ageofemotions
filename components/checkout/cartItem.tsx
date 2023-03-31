import { Product } from "@/models/productModel";
import { ShoppingCart } from "@/models/shoppingCartModel";
import Image from "next/image";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeCartItem } from "@/services/firebase/shoppingCart/removeItemFromShoppingCart";

function CartItem({
   shoppingCart,
   product,
}: {
   product: Product;
   isMember: boolean;
   shoppingCart: ShoppingCart;
}) {
   return (
      <div className="relative flex flex-col items-center justify-center w-full max-w-xl p-3 mx-auto mb-2 bg-white md:flex-row rounded-2xl drop-shadow-sm lg:flex-row">
         <div className="flex flex-col items-center justify-center w-full md:flex-row">
            <span className="!aspect-square !w-[8rem] flex justify-center ">
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
         <div className="flex mt-auto ml-auto">
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

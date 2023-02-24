import { ProductInterface } from "@components/checkoutpdf/checkoutForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardProps {
   product: ProductInterface;
}

function MemebresiaProductCard({ product }: CardProps) {
   return (
      <div className="w-[95%] mx-auto flex flex-col items-center  ">
         {/* <span className="relative aspect-[58/75] w-full"> */}
         <Image
            src={product.photoURL}
            alt=""
            fill
            priority
            className="!relative object-contain !h-fit"
         />
         {/* </span> */}

         <div className="bg-[#fafafa] flex flex-col flex-1 w-full p-4">
            {/* <p className="my-auto text-center">{product.title}</p> */}
            <Link
               href={`/checkoutpdf/${product.link}?psrc=membresia`}
               className="p-2 mt-auto text-center border-2 border-black bg-yellow"
            >
               Comprar ahora
            </Link>
         </div>
      </div>
   );
}

export default MemebresiaProductCard;

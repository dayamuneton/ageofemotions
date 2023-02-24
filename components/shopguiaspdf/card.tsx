import { ProductInterface } from "@components/checkoutpdf/checkoutForm";
import { useAuth } from "@context/authContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardProps {
   product: ProductInterface;
}

function MemebresiaProductCard({ product }: CardProps) {
   const { profile } = useAuth();

   return (
      <div className="w-[95%] mx-auto flex flex-col items-center drop-shadow mt-3">
         <Image
            src={product.photoURL}
            alt=""
            fill
            priority
            className="!relative object-contain !h-fit"
         />

         <div className="bg-[#fafafa] flex flex-col flex-1 w-full p-4">
            <p className="my-auto text-center">{product.title || ""}</p>
            {profile?.categories?.includes("miembro") ? (
               <p className="my-1 text-sm text-center">$3.00 USD</p>
            ) : (
               <p className="my-1 text-sm text-center">$7.00 USD</p>
            )}
            <Link
               href={`/checkoutpdf/${product.link}?psrc=membresia`}
               className="p-2 text-center border-2 border-black bg-yellow"
            >
               Comprar ahora
            </Link>
         </div>
      </div>
   );
}

export default MemebresiaProductCard;

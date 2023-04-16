import { useAuth } from "@/context/authContext";
import { Product } from "@/models/productModel";
import GetPDFButton from "@/components/getPDFButton";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface CardProps {
   product: Product;
}

function MemebresiaProductCard({ product }: CardProps) {
   return (
      <div className="flex flex-col items-center mt-3 w-min drop-shadow">
         <Link href={`/checkoutpdf/${product.handle}`}>
            <span className="relative flex w-[calc(90vw/2-1rem)] lg:w-[calc(90vw/5-1rem)] aspect-[773/1000] lg:max-w-[14rem]">
               <Image src={product.images[0]} alt="" fill priority />
            </span>
         </Link>

         <div className="bg-[#fafafa] flex flex-col  w-full p-4">
            <p className="my-auto text-center">{product.title || ""}</p>
            <p className="my-1 text-sm text-center">
               {product.price_in_dollars.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
               })}
            </p>
            <GetPDFButton product={product} />
         </div>
      </div>
   );
}

export default MemebresiaProductCard;

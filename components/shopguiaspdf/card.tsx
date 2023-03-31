import { useAuth } from "@/context/authContext";
import { Product } from "@/models/productModel";
import GetPDFButton from "@/shared/getPDFButton";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface CardProps {
   product: Product;
}

function MemebresiaProductCard({ product }: CardProps) {
   return (
      <div className="w-[95%] mx-auto flex flex-col items-center drop-shadow mt-3">
         <Link href={`/checkoutpdf/${product.handle}`}>
            <Image
               src={product.images[0]}
               alt=""
               fill
               priority
               className="!relative object-contain !h-fit"
            />
         </Link>

         <div className="bg-[#fafafa] flex flex-col flex-1 w-full p-4">
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

import { Product } from "@/models/productModel";
import Image from "next/image";
import React from "react";

interface ComingSoonCardProps {
   product: Product;
}

function ComingSoonCard({ product }: ComingSoonCardProps) {
   return (
      <div className="mt-3 drop-shadow">
         <span className="relative aspect-[384/497] flex w-[calc(90vw/2-1rem)] lg:w-[calc(90vw/5-1rem)] lg:max-w-[13.5rem] ">
            <Image src={product.images[0]} alt="" fill priority />
         </span>
      </div>
   );
}

export default ComingSoonCard;

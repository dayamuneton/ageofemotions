import { Product } from "@/models/product";
import Image from "next/image";
import React from "react";

interface ComingSoonCardProps {
   product: Product;
}

function ComingSoonCard({ product }: ComingSoonCardProps) {
   return (
      <div className="w-[95%] mx-auto flex flex-col items-center drop-shadow  mt-3">
         <Image
            src={product.images[0]}
            alt=""
            fill
            priority
            className="!relative object-contain !h-fit"
         />
      </div>
   );
}

export default ComingSoonCard;

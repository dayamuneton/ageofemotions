import { useGaleria } from "@/context/galeriaContext";
import React from "react";
import MemebresiaProductCard from "./card";

function Galeria() {
   const { galeriaProducts } = useGaleria();

   return (
      <div className="flex flex-col items-center w-full mt-8">
         <div className="grid grid-cols-2 lg:grid-cols-5 w-[90vw] max-w-6xl">
            {galeriaProducts?.map((product) => (
               <MemebresiaProductCard key={product.handle} product={product} />
            ))}
         </div>
      </div>
   );
}

export default Galeria;

import { useGaleria } from "@/context/galeriaContext";
import { useShop } from "@/context/shopContext";
import React from "react";
import ComingSoonCard from "./comingSoonCard";

function ComingSoon() {
   const { commingSoonProducts } = useGaleria();

   return (
      <div className="flex flex-col items-center w-full my-8">
         <div className="flex flex-col items-center w-full p-2 my-4 bg-yellow">
            <p className="text-2xl font-bold">
               COMING SOON! <br />
            </p>
         </div>
         <div className="grid grid-cols-2 lg:grid-cols-5 w-[90vw] max-w-6xl">
            {commingSoonProducts?.map((product) => (
               <ComingSoonCard key={product.id} product={product} />
            ))}
         </div>
      </div>
   );
}

export default ComingSoon;

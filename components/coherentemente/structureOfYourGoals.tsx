import { useCoherenteMente } from "@/context/coherenteMenteContext";
import { useShop } from "@/context/shopContext";
import React from "react";
import StructureCard from "./cards";
import StructureHeader from "./structureHeader";

function StructureOfYourGoals() {
   const { coherentementeProducts } = useCoherenteMente();
   return (
      <div className="w-full bg-[#fafafa] flex justify-center">
         <div className="flex flex-col w-[90vw] max-w-3xl  items-center  ">
            <StructureHeader />
            {coherentementeProducts?.map((product) => (
               <StructureCard key={product.handle} product={product} />
            ))}
         </div>
      </div>
   );
}

export default StructureOfYourGoals;

import { useRouter } from "next/router";
import React from "react";

interface HistoriaButtonProps {
   text?: string;
}

function HistoriaButton({ text }: HistoriaButtonProps) {
   const router = useRouter();
   const updatePath = () => {
      router.replace("/historia", undefined, {
         shallow: true,
      });
   };
   return (
      <button
         onClick={updatePath}
         className="border-2 border-black text-sm font-bold py-2 px-10"
      >
         <p className="mr-1 inline">Conocer la historia</p>
         {text || "de la camiseta"}
      </button>
   );
}

export default HistoriaButton;

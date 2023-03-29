import GiftButton from "@/shared/giftButton";
import Image from "next/image";
import React from "react";

function Text() {
   return (
      <div className="flex flex-col items-center py-4 sm:p-4 max-w-[95vw] md:max-w-[45ch] md:w-[100%] ">
         <span className="p-2 text-4xl font-bold text-center text-white bg-black sm:text-6xl whitespace-nowrap">
            <p>3 FILTROS </p>
         </span>
         {/* <span className="bg-blueGray h-[.5rem] flex w-[70%]"> </span> */}

         <span className="flex max-w-[95vw] justify-center w-full">
            <p className="p-2 mb-4 sm:text-3xl text-center rotate-[-3deg] whitespace-nowrap bg-[#c7c7c7] font-semibold text-yellow">
               QUE NO PUEDEN FALTAR
            </p>
         </span>
         <span className="flex flex-col items-center py-6 sm:px-6 px-8 text-xl font-thin md:px-8 max-w-[95vw]">
            <span>
               Para <p className="inline font-medium">saber</p> si tus prácticas
            </span>
            <p className="font-medium ">de gestión de emociones</p>
            <p>son efectivas.</p>
            <p className="font-medium">PDF</p>
         </span>

         <span className="text-2xl text-center">
            <p className="font-cutive text-orange">Descárgalo</p>
            <p className="font-medium">Entrenamiento Gratuito</p>
         </span>
         <GiftButton />
      </div>
   );
}

export default Text;

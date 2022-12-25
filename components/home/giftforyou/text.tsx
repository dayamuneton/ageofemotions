import GiftButton from "@shared/giftButton";
import Image from "next/image";
import React from "react";

function Text() {
   return (
      <div className="flex flex-col items-center gap-4 p-4 max-w-[80vw] md:max-w-[45ch] md:w-[100%] ">
         <span className="text-5xl font-bold text-center font-play-fair whitespace-nowrap">
            <p>Te gusta hacer</p>
            <p>cambios de</p>
            <p>mentalidad?</p>
         </span>
         <span className="bg-blueGray h-[.5rem] flex w-[70%]"> </span>

         <span className="flex max-w-[95vw] justify-center w-full">
            <p className="text-orange text-center text-xl rotate-[-10deg] mr-8 font-cutive my-4">
               Pero tus resultados son temporales?
            </p>
         </span>
         <span className="font-semibold flex flex-col items-center gap-6 p-2 px-8 md:px-8">
            <p>
               Probablemente es porque no sabes como evaluar si las prácticas de
               cambios de mentalidad que estás haciendo son realmente efectivas.
            </p>
            <p>
               Es hora de filtrar toda la información que consumes y comenzar a
               experimentar un avance real.
            </p>
            <p>DESCARGA LA GUÍA GRATIS</p>
         </span>
         <GiftButton />
      </div>
   );
}

export default Text;

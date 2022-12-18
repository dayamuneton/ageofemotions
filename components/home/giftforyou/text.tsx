import GiftButton from "@shared/giftButton";
import Image from "next/image";
import React from "react";

function Text() {
   return (
      <div className="flex flex-col items-center gap-4 p-4 max-w-[80vw] md:max-w-[45ch] md:w-[100%] ">
         <p className="text-6xl font-bold text-center font-play-fair">
            Un Regalo <br /> Para Ti
         </p>
         <span className="bg-blueGray h-[.5rem] flex w-[70%]"> </span>
         <p className="font-semibold text-center">
            ​ 3 Técnicas para comenzar a usar tu cuerpo como una herramienta
            para tener una vida emocionalmente coherente.
         </p>
         <span className="flex">
            <p className="text-orange text-4xl rotate-[-10deg] mr-8 font-cutive whitespace-nowrap my-2">
               +1 Práctica
            </p>

            <span className="aspect-square min-w-[3rem] min-h-[3rem] relative flex">
               <Image src="/CorazonRoto.png" alt="" fill />
            </span>
         </span>
         <p className="bg-blueGray font-semibold border-[1.5px] border-black p-2 px-8 md:px-8">
            Esta práctica te ayuda a comprender porque no tener percepción
            corporal de las emociones, te ha llevado a tener mucho dolor y
            confusiones en el amor.
         </p>
         <GiftButton />
      </div>
   );
}

export default Text;

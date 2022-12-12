import Image from "next/image";
import React from "react";
import GiftButton from "../../shared/giftButton";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";

function Text() {
   return (
      <div className="flex flex-col items-center gap-4 p-4 max-w-[80vw] md:max-w-[45ch] md:w-[100%] ">
         <p className="text-6xl font-bold text-center font-play-fair">
            Un Regalo <br /> Para Ti
         </p>
         <span className="bg-[#8f9cb2] h-[.5rem] flex w-[70%]"> </span>
         <p className="font-semibold text-center">
            ​ 3 Técnicas para comenzar a usar tu cuerpo como una herramienta
            para tener una vida emocionalmente coherente.
         </p>
         <span className="flex">
            <p className="text-[#fe6160] text-4xl rotate-[-10deg] mr-8 font-cutive whitespace-nowrap my-2">
               +1 Práctica
            </p>
            <HeartBrokenIcon className="drop-shadow-[0px_0px_.05rem_#000] text-[3rem] text-[#f35b3a] " />
         </span>
         <p className="bg-[#bdc9d9] font-semibold border-[1.5px] border-black p-2 px-8 md:px-8">
            Esta práctica te ayuda a comprender porque no tener percepción
            corporal de las emociones, te ha llevado a tener mucho dolor y
            confusiones en el amor.
         </p>
         <GiftButton />
      </div>
   );
}

export default Text;

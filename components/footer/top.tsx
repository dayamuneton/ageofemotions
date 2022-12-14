import GiftButton from "@components/shared/giftButton";
import Image from "next/image";
import React from "react";

function Top() {
   return (
      <div className="flex flex-col items-center gap-6 p-8">
         <span className="flex relative aspect-square w-[6rem]">
            <Image src="/AmaYLiberateLogo.png" fill alt="" />
         </span>
         <p className="max-w-[23rem] text-2xl font-bold leading-6 text-center mb-6">
            Ama y Libérate es un programa te ayuda a ganar consciencia de tu
            cuerpo por medio del arte y desarrolles habilidades para usarlo como
            una herramienta que te ayude a tener una vida emocionalmente
            coherente.
         </p>
         <GiftButton />
      </div>
   );
}

export default Top;

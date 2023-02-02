import SignUpButton from "@shared/signUpButton";
import Image from "next/image";
import React from "react";

function WhatWillYouGetContent() {
   return (
      <div className="border-2 flex flex-col items-center border-yellow py-8 px-4 lg:px-8 w-[95vw] lg:max-w-md my-4 lg:my-0 mx-auto lg:mx-0 lg:pb-4">
         <span className="flex relative aspect-square h-[10rem] rounded-full overflow-hidden">
            <Image src="/LogoAgeOfEmotions.png" alt="" fill />
         </span>

         <div className="flex flex-col pl-4 my-5 max-w-[40ch]">
            <span className="my-1">
               <h3 className="text-2xl text-orange font-cutive">10 SEMANAS</h3>
               <p className="text-sm font-semibold">
                  Programa Ama & Libérate Parte I
               </p>
            </span>
            <span className="my-1">
               <h3 className="text-2xl text-orange font-cutive">
                  10 DESCARGAS
               </h3>
               <p className="text-sm font-semibold">
                  Descargas Digitales videos, PDF y Arte
               </p>
            </span>
            <span className="my-1">
               <h3 className="text-2xl text-orange font-cutive">
                  10 PRÁCTICAS
               </h3>
               <p className="text-sm font-semibold">
                  Workbooks para ayudarte a ganar consciencia corporal de las
                  emociones.
               </p>
            </span>
            <span className="my-1">
               <h3 className="text-2xl text-orange font-cutive">
                  UNA SECCION 1:1
               </h3>
               <p className="text-sm font-semibold">
                  Una mentoría con Daya Muneton
               </p>
            </span>
         </div>
         <span className="w-full pr-4 mb-2 text-end font-popings">
            ToTal:$<p className="inline line-through">248.00</p>
         </span>
         <p className="text-3xl font-bold text-center">
            Válido desde <br /> Dic 2022 - Ene 2023:
         </p>
         <p className="my-2 text-4xl text-white bg-orange font-belsey">
            $174.00
         </p>
         <div className="bg-[#e8e7e7] flex flex-col items-center p-4 px-8 mb-4">
            <h3 className="flex flex-col items-center text-2xl font-bold text-orange">
               <p className="bg-white w-fit">Oferta de</p>
               <p className="bg-white">Lanzamiento</p>
            </h3>
            <span className="max-w-[30ch]">
               Solo las personas que se inscriban hasta
               <p className="inline mx-1 bg-white">30-Dic-2022,</p>
               tendrán acceso a la parte II y III de este programa AMA &
               LIBÉRATE cuando esté listo.
            </span>
            <p className="my-2 text-4xl text-orange font-cutive">GRATIS</p>
         </div>

         <SignUpButton />
      </div>
   );
}

export default WhatWillYouGetContent;

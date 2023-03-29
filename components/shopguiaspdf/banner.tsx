import { useAuth } from "@/context/authContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Banner() {
   const { profile } = useAuth();
   return (
      <div className="flex flex-col items-center w-full">
         <span className="relative flex aspect-square w-[15rem] my-8">
            <Image src="/LogoAgeOfEmotions.png" alt="" fill />
         </span>
         <div className="w-[90vw] max-w-lg leading-4">
            <p className="font-haviland text-7xl">Ahora vives</p>
            <p className="my-2 text-3xl font-bold text-center">
               En la Era De Las Emociones
            </p>
            <p className="my-4 font-thin">
               Sácale el máximo provecho a todos los avances que la ciencia te
               brinda en procesos de transformación, es hora de aprender a vivir
               de una manera más actualizada, educada sobre tu autopercepción y
               autoconocimiento y lograr tus resultados con coherencia.
            </p>
         </div>
         <div className="flex flex-col items-center justify-center w-full p-2 text-lg font-bold lg:flex-row lg:text-2xl bg-yellow whitespace-nowrap">
            <div className="flex">
               TODAS LAS DESCARGAS A
               <span className="flex mx-1 text-white bg-black">
                  <p className="px-1 text-blue-300">$3.00 USD</p>
               </span>
            </div>
            <div>SOLO PARA NUESTROS MIEMBROS</div>
         </div>
         {!profile?.isMember && (
            <Link
               href="/membresia"
               className="px-12 py-4 mt-2 text-xl font-medium text-white bg-black"
            >
               QUIERO SER MIEMBRO
            </Link>
         )}
      </div>
   );
}

export default Banner;

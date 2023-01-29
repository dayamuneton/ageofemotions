import Image from "next/image";
import React from "react";

function OpenRoads() {
   return (
      <div className="flex items-center py-8 bg-white w-[90vw] max-w-3xl">
         <span className="relative flex w-full aspect-square">
            <Image src="/DayaPulgarArriba.png" alt="" fill />
         </span>
         <div className="w-full pr-6">
            <span className="w-[30ch] overflow-hidden flex flex-col mx-auto">
               <p className="text-2xl font-semibold text-white bg-black w-fit">
                  ABRAMOS CAMINOS
               </p>
               <p className="text-4xl font-cutive text-yellow text-end">
                  Juntos
               </p>
            </span>
            <p className="text-[#777] text-xl leading-5 font-bold mt-6">
               El mundo en el que vives avanza sin detenerse, lo que crea la
               necesidad de buscar nuevas líneas de negocio para evitar que tu
               negocio muera por el surgimiento de nuevos competidores o por
               estar desactualizada. Lo que vas a desarrollar en las asesorías
               es tu capacidad de ver que todo es una oportunidad de
               crecimiento.
            </p>
            <span className="flex flex-col items-center w-full">
               <p className="mt-6 text-4xl font-thin leading-5">Asesorías</p>
               <p className="text-5xl font-bold">1:1</p>
            </span>
         </div>
      </div>
   );
}

export default OpenRoads;

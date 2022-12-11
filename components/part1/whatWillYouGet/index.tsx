import React from "react";
import HabitCard from "./card";
import WhatWillYouGetContent from "./content";
import Mockups from "./mockups";

function WhatWillYouGet() {
   return (
      <div className=" lg:mt-16 lg:flex lg:w-full lg:max-w-3xl lg:justify-between">
         <div>
            <p className="my-4 text-xl font-bold">Lo qué recibirás... </p>
            <WhatWillYouGetContent />
         </div>

         <div className="flex flex-col items-center lg:items-end w-[95%] lg:max-w-[18rem]  gap-4 mb-4 lg:mb-0 lg:gap-6">
            <div className="lg:pt-16  rounded-2xl flex flex-col items-center lg:w-full w-[70vw]">
               <Mockups />
               <p className="mt-6 text-lg font-bold leading-6 text-center font-play-fair">
                  10 Prácticas Para Ganar Percepción Corporal De Tus Emociones.
               </p>
            </div>

            <div className="bg-[#bcc8d9] p-8 pt-4 rounded-2xl flex flex-col items-center lg:w-full w-[70vw]">
               <h2 className="bg-[#e4f10c] text-xl font-semibold my-2 font-popings whitespace-nowrap">
                  Prácticas 1-3
               </h2>
               <p className="text-sm leading-4 ">
                  -Rompiendo Creencias. <br /> -Cuál es tu modelo mental? <br />
                  -Cómo Reconfigurar Tus Herramientas Mentales.
               </p>
            </div>
            <HabitCard
               title="Prácticas 4-6"
               text="Comienza aplicar estas tres prácticas con ayuda del ARTE que te ayudan a crear hábitos para percibir tu cuerpo como parte de la solución."
            />
            <HabitCard
               title="Prácticas 7-9"
               text="Implementa en tu vida LA SUBROGACIÓN. Estas prácticas te ayudarán en la solución de problemas y cumplimiento de metas,  un proceso simple que tal vez lo lleves haciendo inconscientemente durante muchos años pero ahora lo vamos hacer con arte y con intención."
            />
         </div>
      </div>
   );
}

export default WhatWillYouGet;

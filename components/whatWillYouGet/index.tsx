import Image from "next/image";
import React from "react";
import HabitCard from "./card";
import WhatWillYouGetContent from "./content";
import StarIcon from "@mui/icons-material/Star";

function WhatWillYouGet() {
  return (
    <div className="lg:gap-6 lg:my-16 lg:flex">
      <div>
        <p className="my-4 text-xl font-bold">¿Qué recibirás ? </p>
        <WhatWillYouGetContent />
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-4 lg:flex-col lg:items-center lg:mb-0">
        <div className="bg-[#bcc8d9] pt-8  pb-4 rounded-2xl flex flex-col items-center lg:w-[25ch] w-[45vw]">
          <div className="p-2 mb-4 ml-8 mr-auto overflow-hidden bg-white rounded-full">
            <span className="relative flex aspect-square h-[3.5rem] ">
              <Image src="/BlackAndWhiteHeart.png" alt="" fill />
            </span>
          </div>
          <span className="relative flex items-center w-full">
            <p className="absolute text-4xl leading-3 rotate-[-90deg] whitespace-nowrap h-fit w-fit lg:left-[-1rem] left-[-1.5rem] ">
              Parte 1
            </p>

            <p className="ml-auto font-bold text-white px-auto lg:pr-6 font-play-fair lg:max-w-[15ch] max-w-[70%]">
              3 Hábitos Para Ganar Percepción Corporal De Tus Emociones.
            </p>
          </span>
          <span className="text-[#ffdf5e] mt-4 flex whitespace-nowrap">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </span>
          <p className="text-[.7rem] font-light">Available in spanish only</p>
        </div>
        <HabitCard
          title="Hábito #1"
          text="Descubre el principal hábito que te esta manteniendo estancado, haz un pequeño ajuste consciente para que desde hoy avances en tu proceso."
        />
        <HabitCard
          title="Hábito #2"
          text="Comienza aplicar los hábitos que te ayudan a percibir tu cuerpo como parte de la solución, implementando las técnicas como: El arte para una mejor percepción y una guía con muchas preguntas."
        />
        <HabitCard
          title="Hábito #3"
          text="Implementa la LA SUBROGACIÓN. Es un proceso simple que tal vez lo lleves haciendo inconscientemente durante muchos años pero ahora lo vamos hacer con arte y con intención."
        />
        <HabitCard
          title="Terminología"
          text="Términos y conceptos de ciencia que no puede faltar cuando  aprendres sobre el cuerpo y las emociones."
        />
      </div>
    </div>
  );
}

export default WhatWillYouGet;

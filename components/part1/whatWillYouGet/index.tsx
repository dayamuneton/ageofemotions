import Image from "next/image";
import React from "react";
import HabitCard from "./card";
import WhatWillYouGetContent from "./content";
import StarIcon from "@mui/icons-material/Star";
import PersonalizedMentoring from "./personalizedMentoring";

function WhatWillYouGet() {
  return (
    <div className="bg-[#fafbfb] flex flex-col items-center w-full">
      <div className="lg:gap-6 lg:my-16 lg:flex">
        <div>
          <p className="my-4 text-xl font-bold">Lo qué recibirás... </p>
          <WhatWillYouGetContent />
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-4 lg:flex-col lg:items-center lg:mb-0">
          <div className=" pt-8  pb-4 rounded-2xl flex flex-col items-center lg:w-[25ch] w-[45vw]">
            <span className="relative flex items-center w-full">
              <p className="absolute text-3xl leading-3 rotate-[-90deg] whitespace-nowrap h-fit w-fit  left-[-1.5rem] font-belsey font-medium">
                Parte 1
              </p>

              <p className="ml-auto font-bold px-auto lg:pr-6 font-play-fair lg:max-w-[15ch] max-w-[70%]">
                3 Hábitos Para Ganar Percepción Corporal De Tus Emociones.
              </p>
            </span>
            <span className="text-[#ffdf5e] mt-4 flex whitespace-nowrap drop-shadow-[0px_0px_0.05rem_#000]">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </span>
            <p className="text-[.7rem] font-light">Available in spanish only</p>
          </div>

          <div className="bg-[#bcc8d9] px-6 py-4 rounded-2xl flex flex-col items-center lg:max-w-[25ch] max-w-[45vw]">
            <h2 className="bg-[#e4f10c] text-xl font-semibold my-2 font-popings whitespace-nowrap">
              Prácticas 1-3
            </h2>
            <p className="text-sm font-light leading-4">
              -Rompiendo Creencias. <br /> -Cuál es tu modelo mental? <br />{" "}
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
          <span className="relative flex aspect-[7/10] rounded-2xl overflow-hidden w-[25ch] drop-shadow">
            <Image src="/whatWillYouGetCardImg.png" fill alt="" />
          </span>
          {/* <HabitCard
            title="Terminología"
            text="Términos y conceptos de ciencia que no puede faltar cuando  aprendres sobre el cuerpo y las emociones."
          /> */}
        </div>
      </div>
      <PersonalizedMentoring />
    </div>
  );
}

export default WhatWillYouGet;

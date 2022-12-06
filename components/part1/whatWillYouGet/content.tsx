import Image from "next/image";
import React from "react";
import SignUpButton from "../../shared/signUpButton";

function WhatWillYouGetContent() {
  return (
    <div className="border-2 flex flex-col items-center border-[#e4f10c] py-8 px-4 w-[95vw] lg:w-fit my-4 lg:my-0 mx-auto lg:mx-0 ">
      <span className="flex relative aspect-square h-[10rem]">
        <Image src="/AmaYLiberateLogo.png" alt="" fill />
      </span>

      <div className="flex flex-col pl-4 my-8 max-w-[40ch]">
        <span className="my-1">
          <h3 className="text-[#fe6061] text-3xl font-roboto-slab">
            10 SEMANAS
          </h3>
          <p className="text-sm font-semibold">
            Programa Ama & Libérate Parte I
          </p>
        </span>
        <span className="my-1">
          <h3 className="text-[#fe6061] text-3xl font-roboto-slab">
            10 DESCARGAS
          </h3>
          <p className="text-sm font-semibold">
            Descargas Digitales videos, PDF y Arte
          </p>
        </span>
        <span className="my-1">
          <h3 className="text-[#fe6061] text-3xl font-roboto-slab">
            10 PRÁCTICAS
          </h3>
          <p className="text-sm font-semibold">
            Workbooks para ayudarte a ganar consciencia corporal de las
            emociones.
          </p>
        </span>
        <span className="my-1">
          <h3 className="text-[#fe6061] text-3xl font-roboto-slab">
            UNA SECCION 1:1
          </h3>
          <p className="text-sm font-semibold">Una mentoría con Daya Muneton</p>
        </span>
      </div>
      <span className="w-full pr-4 mb-2 text-end font-popings">
        ToTal:$<p className="inline line-through">635.00</p>
      </span>
      <p className="text-3xl font-bold text-center">
        Válido desde <br /> Dic 2022 - Enero 2023:
      </p>
      <p className="text-white bg-[#fe6061] text-4xl my-2">$174.00</p>
      <div className="bg-[#e8e7e7] flex flex-col items-center p-4 px-8">
        <h3 className=" text-[#fe6061] text-2xl font-bold flex flex-col items-center">
          <p className="bg-white w-fit">Oferta de</p>
          <p className="bg-white">Lanzamiento</p>
        </h3>
        <span className="w-[30ch]">
          Solo las personas que se inscriban hasta
          <p className="inline mx-1 bg-white">30-Dic-2022,</p>
          tendrán acceso a la parte II y III de este programa AMA & LIBÉRATE.
        </span>
      </div>
      <p className="text-[#fe6061] text-4xl my-2">GRATIS</p>

      <SignUpButton />
    </div>
  );
}

export default WhatWillYouGetContent;

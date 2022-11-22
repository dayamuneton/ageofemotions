import Image from "next/image";
import React from "react";

function WhatWillYouGetContent() {
  return (
    <div className="border-2 flex flex-col items-center border-[#e4f10c] py-8 px-4 w-[95vw] lg:w-fit my-4 lg:my-0 mx-auto lg:mx-0 ">
      <span className="flex relative aspect-square h-[10rem]">
        <Image src="/AmaYLiberateLogo.png" alt="" fill />
      </span>

      <div className="flex flex-col my-8">
        <span className="my-1">
          <h3 className="text-[#fe6061] text-3xl font-roboto-slab">
            VIDEOS Y PDF.
          </h3>
          <p className="text-sm font-semibold">Ama & Libérate Parte I </p>
        </span>
        <span className="my-1">
          <h3 className="text-[#fe6061] text-3xl font-roboto-slab">
            ARTE GRATIS
          </h3>
          <p className="text-sm font-semibold">Descargas Digitales </p>
        </span>
        <span className="my-1">
          <h3 className="text-[#fe6061] text-3xl font-roboto-slab">
            UNA SECCION 1:1
          </h3>
          <p className="text-sm font-semibold">Con Daya Muneton </p>
        </span>
      </div>
      <span className="w-full pr-4 mb-2 text-end font-popings">
        ToTal:$<p className="inline line-through">635.00</p>
      </span>
      <p className="text-3xl font-bold text-center">
        Solo por Nov - Dic <br /> 2022:
      </p>
      <p className="text-white bg-[#fe6061] text-4xl my-2">$87.00</p>
      <div className="bg-[#e8e7e7] flex flex-col items-center p-4 px-8">
        <h3 className=" text-[#fe6061] text-2xl font-bold flex flex-col items-center">
          <p className="bg-white w-fit">Oferta de</p>
          <p className="bg-white">Lanzamiento</p>
        </h3>
        <span className="w-[30ch]">
          Solo las personas que se inscriban hasta
          <p className="inline mx-1 bg-white">22-NOV-2022,</p>
          tendrán acceso a la parte II y III de este programa AMA & LLIBÉRATE.
        </span>
        <p className="text-[#fe6061] text-4xl ">GRATIS</p>
      </div>

      <button className="mt-8 mb-4 p-4 px-12 bg-[#ff6161] rounded-[.6rem] text-sm font-semibold">
        {/* eslint-disable-next-line react/jsx-no-target-blank */}
        <a href="https://subscribepage.io/PZs4xw" target="_blank">
          INSCRIBIRME, AHORA
        </a>
      </button>
    </div>
  );
}

export default WhatWillYouGetContent;

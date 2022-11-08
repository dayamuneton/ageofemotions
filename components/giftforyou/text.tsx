import Image from "next/image";
import React from "react";
import GiftButton from "../shared/giftButton";

function Text() {
  return (
    <div className="flex flex-col items-center gap-4 p-4 max-w-[80vw] md:max-w-[45ch]">
      <p className="text-[#76e2f1] text-4xl font-bold">Ama & Libérate</p>
      <span className="bg-[#8f9cb2] h-[.5rem] flex w-[70%]"> </span>
      <p className="text-6xl font-bold text-center">
        Un Regalo <br /> Para Ti
      </p>
      <p className="font-semibold text-center">
        ​ 3 Técnicas para comenzar a usar tu cuerpo como una herramienta para
        tener una vida emocionalmente coherente.
      </p>
      <span className="flex">
        <p className="text-[#fe6160] text-4xl rotate-[-10deg] mr-8">
          + 1 Práctica
        </p>
        <span className="aspect-square w-[3rem] relative flex">
          <Image src="/CorazonRoto.png" alt="" fill />
        </span>
      </span>
      <p className="bg-[#bdc9d9] font-semibold border-[1.5px] border-black p-2 md:px-8">
        Esta práctica te ayuda a comprender porque no tener percepción corporal
        de las emociones, te ha llevado a tener mucho dolor y confusiones en el
        amor.
      </p>
      <GiftButton />
    </div>
  );
}

export default Text;

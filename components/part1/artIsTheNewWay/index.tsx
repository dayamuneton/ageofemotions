import Image from "next/image";
import React from "react";

function ArtIsTheNewWay() {
  return (
    <div className="bg-[#faf8f5] flex w-full justify-center">
      <div className="bg-[#fefeff] flex-col flex items-center w-full lg:max-w-[65vw]">
        <h2 className="my-4 text-2xl font-bold text-center font-play-fair lg:max-w-[50vw] max-w-[90vw]">
          El Arte Es La <p className="inline bg-[#e4f10c]">Nueva</p> Forma De
          Ganar Consciencia De la Percepción Corporal De las Emociones.
        </h2>
        <div className="flex flex-col items-center lg:max-w-[25rem] font-light border-b-4 mb-12 max-w-[90vw]">
          <span className="relative flex w-[25rem] aspect-square">
            <Image src="/LeopardGlassesGirlSquare.jpg" alt="" fill />
          </span>
          <p className="my-8">
            Este programa contiene arte que ayudará a unificar el cuerpo y la
            mente, haciendo conexiones entre tus sensaciones y los conceptos
            sobre ti mismo.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ArtIsTheNewWay;

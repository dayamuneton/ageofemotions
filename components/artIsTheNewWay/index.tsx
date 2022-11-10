import Image from "next/image";
import React from "react";

function ArtIsTheNewWay() {
  return (
    <div className="bg-[#fefeff] flex-col flex items-center w-full md:max-w-[65vw]">
      <h2 className="my-4 text-2xl font-bold text-center font-play-fair max-w-[50vw]">
        El Arte Es La Nueva Forma De Ganar Consciencia De la Percepción Corporal
        De las Emociones.
      </h2>
      <div className="flex flex-col items-center w-[30rem]">
        <span className="relative flex w-full aspect-square">
          <Image src="/LeopardGlassesGirlSquare.jpg" alt="" fill />
        </span>
        <p className="my-8">
          Este programa contiene arte que ayudará a unificar el cuerpo y la
          mente, haciendo conexiones entre tus sensaciones y los conceptos sobre
          ti mismo.
        </p>
      </div>
    </div>
  );
}

export default ArtIsTheNewWay;

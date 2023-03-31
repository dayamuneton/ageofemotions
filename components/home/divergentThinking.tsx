import Image from "next/image";
import React from "react";

function DivergentThinking() {
   return (
      <div className="flex flex-col items-center w-full max-w-3xl p-4 bg-white md:flex-row">
         <span className="w-full flex flex-col items-center">
            <Image
               src="/RedesDayaMuneton.png"
               alt=""
               fill
               className="!relative "
            />
            <span className="mx-auto mt-4">
               <p className="bg-[#777] text-yellow w-fit py-1 rotate-[-3deg] text-3xl font-medium">
                  20 Años
               </p>
               <p className="text-2xl font-cutive">De experiencia</p>
            </span>
         </span>
         <div className="md:w-[70%] w-[85vw] flex flex-col  font-thin leading-5 p-4">
            <h2 className="text-2xl font-bold mb-2">Hola Soy</h2>
            <p className="text-[2.5rem] text-center my-2 font-haviland">
               Daya Muneton
            </p>
            <Image
               src="/LogoAgeOfEmotions.png"
               alt=""
               fill
               className="!relative !w-[5rem] mx-auto"
            />
            <span className="my-3">
               Bienvenid@ a
               <p className="inline mx-1 font-semibold">AGE OF EMOTIONS</p>,
               diseñé este programa porque es hora de enriquecer tu experiencia
               de vida, conociendo tus emociones.
            </span>
            <span className="mb-3">
               Aquí encontrarás todo junto, desde cómo cultivar una
               <p className="inline mx-1 font-semibold">mente coherente</p>
               para
               <p className="inline mx-1 font-semibold">escalar en tu vida.</p>
            </span>
            <span className="mb-3">
               hasta implementar
               <p className="inline mx-1 font-semibold">
                  Marketing solidario en tu emprendimiento
               </p>
               y al mismo tiempo contribuyes con el bienestar emocional de tu
               comunidad.
            </span>
            <span>
               En
               <p className="inline mx-1 font-semibold whitespace-nowrap">
                  AGE OF EMOTIONS,
               </p>
               promovemos la empatía, la sensibilización y la inclusión entre
               instituciones, marcas, influencers y empresas con esta crisis que
               esta afectando a nuestra comunidad.
            </span>
         </div>
      </div>
   );
}

export default DivergentThinking;

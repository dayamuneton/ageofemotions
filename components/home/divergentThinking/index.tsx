import Image from "next/image";
import React from "react";

function DivergentThinking() {
   return (
      <div className="flex flex-col items-center w-full max-w-3xl p-4 bg-white md:flex-row">
         <span className="relative flex w-[100%] aspect-[9/10]">
            <Image src="/RedesDayaMuneton.png" alt="" fill />
         </span>
         <div className="md:w-[70%] w-[85vw] flex flex-col  font-thin leading-5 p-4">
            <h2 className="text-2xl font-bold mb-2">Hola Soy</h2>
            <p className="text-[2.5rem] text-center my-2 font-haviland">
               Daya Muneton
            </p>
            <span className="my-3">
               Creadora de
               <p className="inline mx-1 font-semibold">AGE OF EMOTIONS</p>,
               diseñé este programa por que creo es hora de aprender a vivir de
               una manera más actualizada, educada sobre ti mismo y lograr tus
               resultados con coherencia.
            </span>
            <span className="">
               Aquí encontrarás todo junto, desde cómo cultivar una
               <p className="inline mx-1 font-semibold">
                  mente coherente y altamente creativa
               </p>
               para
               <p className="inline mx-1 font-semibold">
                  escalar tu emprendimiento a otro nivel,
               </p>
               hasta implementar
               <p className="inline mx-1 font-semibold">
                  tecnologías y variabilidad de los servicios y/o productos
               </p>
               con los mismos recursos que ya tienes.
            </span>
            <span className="mx-auto mt-16">
               <p className="bg-[#777] text-yellow w-fit py-1 rotate-[-3deg] text-3xl font-medium">
                  20 Años
               </p>
               <p className="text-2xl font-cutive">De experiencia</p>
            </span>
         </div>
      </div>
   );
}

export default DivergentThinking;

import Image from "next/image";
import React from "react";

function LograrQueEntiendan() {
   return (
      <div className="flex flex-col items-center w-full max-w-4xl p-4 bg-white md:flex-row">
         <span className="relative flex w-[100%] aspect-square">
            <Image src="/HandInHeart.png" alt="" fill />
         </span>
         <div className="md:w-[100%] w-[85vw] flex flex-col   font-thin p-4">
            <h2 className="text-2xl font-bold">Hola Soy</h2>
            <p className="text-[2.5rem] text-center my-1 font-haviland">
               Daya Muneton
            </p>
            <span className="flex flex-col gap-3 mx-auto mt-2 text-sm">
               <p>
                  Durante muchos años la falta de salud emocional afectó a mi y
                  a mi familia, lastimosamente vivimos un mercado abarrotado de
                  promesas de transformación sin fundamentos científicos y
                  muchas de ellas basadas en la esperanza y esto atrasó el
                  proceso de cambio que tanto necesitábamos.
               </p>
               <p>
                  Es frustrante ver a los seres que amas sumergidos en un mundo
                  de dolor y se les dificulta evaluar si la prácticas que están
                  haciendo son realmente efectivas y por el contrario, los deja
                  cada vez más confundidos.
               </p>
               <p>
                  ¡No siempre tiene que ser así! Los que estamos ahí apoyándolos
                  moralmente somos los que podemos ver si están estancados o
                  realmente están avanzando en su proceso de mejorar su salud
                  emocional.
               </p>
               <p>
                  Quiero compartir contigo lo que aprendimos del gran aporte que
                  la ciencia puede llegar hacer en procesos de sanación.
               </p>
               <p>
                  Pero, hay algo importante que identifiqué en todo este
                  recorrido:
               </p>
            </span>
            <span className="flex flex-col items-center mx-auto mt-16 ">
               <p className="text-[#aaa]  w-fit py-1 text-xl font-medium leading-5">
                  Existe algo que la ciencia no ha logrado hacer con las teorías
                  de las emociones, lograr que la humanidad las entienda.
               </p>
               <p className="text-xl text-[#777] font-bold">
                  El Arte si lo logra !
               </p>
            </span>
         </div>
      </div>
   );
}

export default LograrQueEntiendan;

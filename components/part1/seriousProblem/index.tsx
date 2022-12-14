import React from "react";

function SeriousProblem() {
   return (
      <div className="w-full bg-[#fafafa] flex flex-col items-center pb-12 pt-8 font-light">
         <div className="lg:w-[70ch] w-[90vw] gap-2 flex flex-col items-center leading-4">
            <h2 className="text-xl mx-auto font-bold max-w-[30ch] mb-6">
               En el campo de la salud mental tenemos un problema{" "}
               <p className="inline text-orange"> GRAVE </p>
            </h2>
            <span>
               Los profesionales de la salud mental{" "}
               <p className="inline font-medium underline text-orange">NO</p>
               <p className="inline ml-1 font-medium">
                  DESARROLLAN ALTERNATIVAS CREATIVAS PARA QUE SUS CLIENTES
                  PUEDAN PERCIBIR LOS CONOCIMIENTOS CIENTÍFICOS SOBRE LAS
                  EMOCIONES, NO SOLO CON LA MENTE SI NO CON EL CUERPO.
               </p>
            </span>
            <span className="my-4">
               Por otro lado las personas desesperadas
               <p className="inline mx-1 font-medium">
                  BUSCAN SOLUCIONES INVENTANDO FORMAS CREATIVAS PARA SANAR,
               </p>
               pero por no tener una base solida en conocimientos científicos
               todo lo convierten en soluciones místicas y luego las
               comercializan.
            </span>
            <span>
               Así es como vivimos en un mercado abarrotado de promesas de
               transformación, es por eso que como artista y desarrollé este
               programa, que
               <p className="inline mx-1 font-medium">
                  NO REVELA SECRETOS, SOLO TE BRINDA SOLUCIONES MEDIBLES,
               </p>
               porque tienes un cuerpo físico.
            </span>
         </div>
      </div>
   );
}

export default SeriousProblem;

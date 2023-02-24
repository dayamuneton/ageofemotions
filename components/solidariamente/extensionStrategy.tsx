import Image from "next/image";
import React from "react";

function ExtensionStrategy() {
   return (
      <div className="w-[90vw] max-w-3xl bg-white mt-2">
         <h2 className="py-12 text-2xl font-semibold text-center">
            Creemos juntos una estrategia de extensión
         </h2>
         <div className="flex flex-col md:flex-row items-center">
            <span className="relative flex w-full aspect-square">
               <Image src="/DayaTablet.png" alt="" fill />
            </span>
            <span className="flex flex-col gap-3 p-4 font-thin leading-4 w-[80%]">
               <p>Aprende a crear sistemas que te permiten expandirte.</p>
               <p>
                  Creemos impacto social que te permita crecer junto con tu
                  comunidad.
               </p>
               <p>Detecta nuevas líneas de negocio para tu empresa</p>
               <p>Exploremos nuevos canales de distribución</p>
               <p>Analicemos nuevos nichos de mercado</p>
               <p>
                  Que alianzas entre empresas puedes usar para llevar a cabo una
                  idea.
               </p>
               <p>Hagamos pruebas de anticipación de bajo costo.</p>
               <p>
                  Analicemos cuánto porcentaje de dinero puedes invertir para
                  tus aventuras comerciales, sin que se perjudique tu negocio.
               </p>
            </span>
         </div>
      </div>
   );
}

export default ExtensionStrategy;

import Image from "next/image";
import React from "react";

function TrabajaConmigo() {
   return (
      <div className="w-[90vw] justify-center items-center max-w-3xl flex flex-col md:flex-row my-10 bg-white p-6">
         <span className="relative flex aspect-square w-[90%]">
            <Image src="/DayaTrabajaConmigo.png" alt="" fill />
         </span>
         <div className="w-full flex flex-col items-center p-4 px-8 gap-4 leading-5 font-thin text-sm max-w-[50ch]">
            <h2 className="text-3xl text-[#555] font-bold">Trabaja conmigo</h2>
            <p>
               Si te gustó lo que aprendiste del programa y quieres ayudar a
               transformar vidas a través del conocimiento científico y
               metodologías que usan arte para que las personas entiendan sus
               emociones de una manera diferente.
            </p>
            <p>
               O tal vez piensas que este programa es una oportunidad para
               complementar las prácticas de desarrollo emocional que ya le
               brindas a tus clientes
            </p>
            <p>
               Entonces esta es una oportunidad para aumentar tus fuentes de
               ingresos y al mismo tiempo estás contribuyendo con un esfuerzo
               colectivo donde todos queremos un mundo más tranquilo.
            </p>
            <p>Te daremos todo el soporte que necesitas para lograrlo.</p>
         </div>
      </div>
   );
}

export default TrabajaConmigo;

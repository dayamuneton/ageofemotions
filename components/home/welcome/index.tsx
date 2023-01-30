import Image from "next/image";
import React from "react";

function WelcomeToAOE() {
   return (
      <div className="w-full max-w-3xl bg-[#ddd] flex justify-center my-12 py-8">
         <div className="flex flex-col items-center w-[95vw] max-w-[50ch] leading-5">
            <p>
               Las personas se están dando cuenta que no se requiere pagar
               exagerados precios a ningún maestro, para hacer algo que pueden
               lograr por ellos mismos con solo adquirir conocimientos básicos
               sobre el cuerpo humano.
            </p>
            <span className="relative flex aspect-video w-[110%]">
               <Image src="/EvolutionLineArt.png" alt="" fill />
            </span>
            <p>
               Estás viviendo una época donde puedes explicar todos los
               fenómenos relacionados con tus emociones que pasan en tu
               organismo sin necesidad de relacionarlo con creencias que te
               mantienen limitado, confundido y estancado.
            </p>
            <p className="text-center font-bold text-xl text-[#555] leading-5 my-4">
               ​ Sácale el máximo provecho a todos los avances que la ciencia te
               brinda
            </p>
            <p className="text-xl font-bold text-yellow bg-[#777]">
               BIENVENIDO A LA ERA DE LAS EMOCIONES
            </p>
         </div>
      </div>
   );
}

export default WelcomeToAOE;

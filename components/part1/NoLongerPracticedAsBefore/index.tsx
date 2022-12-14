import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function NoLongerPracticedAsBefore() {
   return (
      <div className="flex flex-col items-center p-6 lg:p-12 w-[95vw]">
         <h2 className="mb-8 text-2xl font-bold ">
            El autoconocimiento ya <u>No</u> se practica como antes...
         </h2>
         <div className="lg:w-[60ch] leading-4 ">
            <span className="flex mb-4">
               <ArrowForwardIcon className="text-orange mr-2 mt-1" />
               <p>
                  Las personas se están dando cuenta que no se requiere pagar
                  exagerados precios a ningún maestro, elementos mágicos o tener
                  acceso a un portal, para hacer algo que pueden lograr por
                  ellos mismos con solo adquirir conocimientos básicos sobre el
                  cuerpo humano.
               </p>
            </span>
            <span className="flex">
               <ArrowForwardIcon className="text-orange mr-2 mt-1" />
               <p>
                  Muchas prácticas están volviéndose obsoletas porque los
                  últimos estudios científicos sobre la bioquímica y fisiología
                  de las emociones cambiaron las reglas del juego.
               </p>
            </span>
         </div>
      </div>
   );
}

export default NoLongerPracticedAsBefore;

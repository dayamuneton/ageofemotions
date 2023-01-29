import Image from "next/image";
import React from "react";

function CamisetaTextImg() {
   return (
      <div className="flex flex-col md:flex-row items-center py-4 w-[90vw] max-w-3xl ">
         <div className="flex flex-col items-center p-4">
            <span className="flex relative w-[17rem] max-w-[40vw] aspect-[2/3] ">
               <Image src="/camiseta.jpg" alt="" fill />
            </span>
            <span className="my-4 text-xl font-bold text-center text-orange">
               <p>USD $1,000,000</p>
               <p>Un millón de Dolares</p>
            </span>
         </div>
         <div className="flex flex-col items-center">
            <div className="flex flex-col gap-3 p-4 text-sm font-thin leading-4">
               <p>
                  ¿Alguna vez te has sentido impotencia y frustración cuando
                  querías ayudar a alguien que está sufriendo y no sabes como
                  ayudarlo a sentirse mejor?
               </p>
               <p>
                  ¿Conoces a alguien que sientes que su lucha es solo por
                  permanecer vivo?
               </p>
               <p>
                  La salud emocional no es algo que afecta solo a una persona,
                  también destruye una familia completa y puede detener hasta su
                  progreso.
               </p>
               <p>
                  Eso fue exactamente lo que nos pasó a mi y mi familia durante
                  muchos años, todo se detuvo porque yo no conciliaba la idea de
                  llevar una vida normal mientras los seres que amo vivían en un
                  mundo devastador que los lastimaba tanto, hasta el punto de
                  rendirse.
               </p>
               <p>NO IMPORTA! Todo se puede recuperar, pero la vida no.</p>
               <p>
                  Esta camiseta a medida del tiempo fue registrando y reflejando
                  lo que mi hijo sentía, con el paso de las horas, los días, los
                  meses y los años, creo que no necesito palabras para contar lo
                  mal que se sentía.
               </p>
               <p>Esta camiseta es una obra de arte, su autor es el dolor.</p>
               <p>
                  Una obra de arte invaluable, porque con el dinero recaudado
                  ayudará a sanar mentes, sanar cuerpos y hasta salvar vidas.
               </p>
            </div>
            <button className="p-2 px-12 border-[3px] border-black my-4 text-sm font-medium">
               Conocer la historia de la camiseta
            </button>
         </div>
      </div>
   );
}

export default CamisetaTextImg;

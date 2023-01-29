import Image from "next/image";
import React from "react";

function AyudameAayudar() {
   return (
      <div className="flex flex-col items-center w-full py-8 bg-white">
         <div className="flex flex-col items-center">
            <h2 className="text-[#777] font-bold text-3xl">Ayúdame a ayudar</h2>
            <p className="text-sm">
               Si alguna vez pensaste en ayudar y no sabes cómo, está es una
               oportunidad. ​
            </p>
         </div>
         <div className="flex flex-col items-center md:flex-row w-[90vw] max-w-3xl">
            <div className="flex flex-col items-center p-4">
               <span className="flex relative w-[17rem] max-w-[40vw] aspect-[2/3] ">
                  <Image src="/camiseta.jpg" alt="" fill />
               </span>
               <span className="my-4  font-bold text-center border-[3px] border-black px-8 p-2">
                  Quiero la camiseta
               </span>
            </div>
            <div className="flex flex-col items-center">
               <div className="flex flex-col items-center gap-3 p-4 text-sm font-thin leading-4">
                  <p>
                     Me gusta llevar mis proyectos a niveles altos, hoy más que
                     nunca, en medio de una crisis mundial de salud mental,
                     estoy convirtiendo este programa en una empresa. ​
                  </p>
                  <p>
                     Esta camiseta no solo representa una etapa muy dura mi
                     familia, también representa la posibilidad que este
                     programa pueda crecer más, expandirse más y beneficiar a
                     más personas en todo el mundo.
                  </p>
                  <ul className="list-disc w-[90%] flex flex-col gap-3">
                     <li>
                        Con tu participación me estas ayudando a que otras
                        personas se capaciten y puedan enseñar este programa.
                     </li>
                     <li>
                        Me estas ayudando a crear tecnologías para exponer esta
                        información de un a manera más creativa y facilite la
                        comprensión de las teorías de las emociones. ​
                     </li>
                     <li>
                        Me estas ayudando a hacer eventos de arte interactivo
                        para promocionar el programa y al mismo tiempo sean
                        eventos que promuevan un cambio emocional.
                     </li>
                     <li>
                        Me estas ayudando a crear equipos de trabajo de
                        desarrollo tecnológico y marketing para el desarrollo y
                        crecimiento de la empresa.
                     </li>
                     <li>
                        Me estas ayudando promover la empatía, la
                        sensibilización y la inclusión entre las personas, las
                        marcas, las instituciones, los influencers y las
                        empresas con esta crisis de salud emocional que esta
                        afectando a nuestra comunidad.
                     </li>
                  </ul>
               </div>
               <button className="p-2 px-12 border-[3px] border-black my-4 text-sm font-medium">
                  Conocer la historia de la camiseta
               </button>
            </div>
         </div>
      </div>
   );
}

export default AyudameAayudar;

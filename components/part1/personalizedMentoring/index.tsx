import Image from "next/image";
import React from "react";

function PersonalizedMentoring() {
   return (
      <div className=" w-[90vw] px-8 pb-8 mb-16 rounded-3xl max-w-2xl bg-blueGray">
         <div className="p-2 mt-4 overflow-hidden bg-white rounded-full w-fit">
            <span className="relative flex aspect-square w-[4rem] ">
               <Image src="/BlackAndWhiteHeart.png" fill alt="" />
            </span>
         </div>

         <span className="leading-[1.2rem] text-sm">
            <p>
               En la mentoría personalizada te brindaré toda mi experiencia en
               este recorrido por mi misma, te contaré mi historia y porque es
               la razón por la que élaboré este programa.
            </p>
            <p className="font-bold"> &#8226; Te daré un feedback de:</p>
            <p>
               Lo que veo en ti y de las herramientas mentales que has creado
               cuando no percibías tu cuerpo como parte de tu consciencia.
            </p>
            <p className="font-bold"> &#8226; Mi feedback está basado en:</p>
            <ol className="list-decimal w-[90%] mx-auto">
               <li>
                  Cosas que puedes hacer mejor con estas prácticas aplicandolas
                  a tu vida.
               </li>
               <li>
                  Te diré como puedes implementar esta nueva visión de ti mismo
                  como si yo, fuera tú.
               </li>
               <li>
                  Compartiré contigo como estructuré todo este conocimiento
                  sobre un canvas de manera que puedas organizar tu conocimiento
                  espiritual, lo puedas visualizar y recordar tus herramientas
                  mentales en el momento preciso.
               </li>
            </ol>
         </span>
      </div>
   );
}

export default PersonalizedMentoring;

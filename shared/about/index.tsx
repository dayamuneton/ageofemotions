import Image from "next/image";
import React from "react";

function About() {
   return (
      <div className="w-full max-w-2xl">
         <h2 className="mb-8 text-lg font-bold">Así comenzó todo...</h2>
         <div className="flex flex-col items-center">
            <span className="flex flex-col gap-8 max-w-[50ch]  ">
               <p>
                  Aprendí que aunque era una líder en mi vida y mis empresas,
                  había logrado ser coherente con mis sueños y mis resultados,
                  no era tan fácil para las personas a mi alrededor, al no estar
                  educada sobre mis emociones no podía transmitir ese
                  conocimiento, es muy frustrante ver a tu equipo de trabajo y
                  los seres que amas sin poder ayudarles a salir adelante.
               </p>
               {/*  */}
               <p>
                  Comencé a comprender algo muy interesante que le sucede a los
                  líderes , lo que me sucedía a nivel familiar podría ser la
                  mima razón por la que no pueden replicar su éxito a su equipo
                  de trabajo.
               </p>
               <p>
                  Entonces diseñe este programa que ayuda promover la empatía,
                  la sensibilización y la inclusión entre las personas, las
                  marcas, las instituciones, los influencers y las empresas con
                  esta crisis de salud emocional que esta afectando a nuestra
                  comunidad y nos limita el progreso y la creatividad.
               </p>
               <p>
                  Soy Daya Muneton artista y emprendedora, me gusta llevar mis
                  proyectos a niveles altos, hoy más que nunca, en medio de una
                  crisis mundial de salud mental, estoy convirtiendo este
                  programa en una empresa para que este mensaje pueda crecer
                  más, expandirse más y beneficiar a más personas en todo el
                  mundo.
               </p>
            </span>
         </div>
      </div>
      // </div>
   );
}

export default About;

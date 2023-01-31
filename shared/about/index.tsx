import HistoriaButton from "@shared/historiaButton";
import Image from "next/image";
import React from "react";

function About() {
   return (
      <div className="w-full max-w-2xl">
         <h2 className="mb-8 text-lg font-bold">Así comenzó todo...</h2>
         <div className="flex flex-col items-center">
            <span className="flex flex-col gap-4 max-w-[50ch] items-center ">
               <p>
                  Aprendí que aunque era una líder en mi vida y mis empresas,
                  había logrado ser coherente con mis sueños y mis resultados,
                  para las personas a mi alrededor no era tan fácil hacerlo
               </p>
               {/*  */}
               <p>
                  Al no estar educada sobre mis emociones, no tenía claro mis
                  procesos mentales era muy difícil transmitir lo que sabía y
                  replicar mi modelo de éxito, fue muy frustrante ver a mi
                  equipo de trabajo y los seres que amas sin poder ayudarles a
                  salir adelante.
               </p>
               <p>
                  Comencé a comprender algo muy interesante, lo que le sucede a
                  los líderes era lo mismo que me sucedía a nivel familiar y
                  podría ser la mima razón por la que no pueden replicar su
                  éxito a su equipo de trabajo. ​
               </p>
               <p>
                  La educación sobre las emociones no solo es para lograr mentes
                  sanas sino para mejorar la comunicación en equipos de trabajo,
                  mejorar la empátia, el liderazgo y la creatividad.
               </p>
               <p className="mb-4">
                  Soy Daya Muneton artista y emprendedora, me gusta llevar mis
                  proyectos a niveles altos, hoy más que nunca, en medio de una
                  crisis mundial de salud mental, estoy convirtiendo este
                  programa en una empresa para que este mensaje pueda crecer
                  más, expandirse más y beneficiar a más personas en todo el
                  mundo.
               </p>
               <HistoriaButton text="completa" />
            </span>
         </div>
      </div>
      // </div>
   );
}

export default About;

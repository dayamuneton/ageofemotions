import Image from "next/image";
import React from "react";

function Ageofemotions() {
   return (
      <div className="w-full bg-[#faf9f4] flex justify-center pb-12">
         <div className="flex flex-col items-center w-[90vw] max-w-3xl">
            <div className="flex w-[70%]">
               <span className="relative flex aspect-video w-full">
                  <Image src="/ArtAndTitle.png" alt="" fill />
               </span>
            </div>
            <div className="flex flex-col gap-3 text-sm font-thin leading-4">
               <p>
                  <b className="mr-1">AGE OF EMOTIONS</b>
                  un programa basado en la ciencia y en metodologías que usan el
                  arte para ayudar a las personas a entender las emociones de
                  una manera diferente.
               </p>
               <p>
                  De está manera puedas explicar todos los fenómenos que pasan
                  en tu organismo sin necesidad de relacionarlo con una creencia
                  que tal vez te ha tenido limitado, confundido y estancado.
               </p>
               <p>
                  Estas viviendo una época donde puedes sacar el máximo provecho
                  de los conocimientos científicos sobre las emociones.
               </p>
               <p>
                  Como individuos nos preocupamos por evolucionar
                  económicamente, socialmente, intelectualmente etc.. Cuando ya
                  sentimos que algo esta mal y nos esta perjudicando, entonces
                  le prestamos atención a nuestra parte emocional.
               </p>
               <p>
                  Tengo la percepción que como humanidad también nos pasó lo
                  mismo, evolucionamos científicamente, tecnológicamente etc...
                  Y ahora que estamos afrontando una crisis mundial de salud
                  metal es cuando le estamos prestando la atención que siempre
                  debió tener.
               </p>
               <p>
                  Viviendo y siendo parte de esta humanidad confundida,
                  experimentando la carencia de conocimientos científicos sobre
                  nosotros mismos que nos ha llevado a buscar soluciones basadas
                  en fantasías y nos ha llevado a tener una actitud pasiva
                  frente a la salud emocional.
               </p>
               <p>
                  Observo la incapacidad de percibirnos como algo físico,
                  precisamente por tener un cerebro tan desarrollado olvidamos
                  el resto del cuerpo como parte de esa herramienta que nos
                  ayudaría a tener coherencia emocional.
               </p>
               <p>
                  Creo que la humanidad se está esforzando por ayudar a
                  solucionar esta crisis, desde los profesionales hasta los
                  desesperados como yo que se dieron la forma de lograrlo, la
                  diferencia es que aquellas personas cuyas prácticas no están
                  basadas en la ciencia se confunden y confunden a los demás.
               </p>
               <p>
                  Por eso cree este programa con prácticas sencillas basadas en
                  conocimientos científicos que facilitan el autoconocimiento,
                  porque quiero ser parte de los que queremos contribuir con un
                  esfuerzo colectivo, de sanar mentes, sanar cuerpos y hasta
                  salvar vidas.
               </p>
               <p>
                  Se que no estoy sola, que somos muchos los que queremos un
                  mundo más tranquilo y lo vamos a lograr!!
               </p>
            </div>
         </div>
      </div>
   );
}

export default Ageofemotions;

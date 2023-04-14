import React from "react";
import SouthIcon from "@mui/icons-material/South";
import GiftButton from "@/components/giftButton";
import Image from "next/image";
function WorldHasEvolved() {
   return (
      <div className="flex flex-col items-center w-full max-w-3xl p-12 mt-12 bg-white ">
         <h2 className="mb-6 text-3xl font-bold ">
            Este mundo ha evolucionado en todo pero cuando se trata de en la
            gestionar emociones necesitamos hacer una actualización.
         </h2>
         <div className="flex flex-col items-center gap-4 mb-4 font-thin">
            <p>
               La carencia de conocimientos científicos sobre nosotros mismos
               nos ha llevado a buscar soluciones basadas en fantasías,
               gestionando nuestras emociones de una forma muy romántica, sexy y
               sofisticada.
            </p>
            <p>
               Cuando pensamos en mejorar nuestra salud emocional pensamos que
               necesitamos conectamos con algo.
            </p>
            <p>
               Esto nos condujo a tener una actitud pasiva, conformista y
               resignada, gestionando las emociones como nuestros antepasados.
            </p>
            <p className="text-lg font-bold text-gray-600 bg-yellow">
               Lo bueno es que ahora vives, en la era de las emociones !!
            </p>

            <Image
               src="/EvolutionLineArt.png"
               alt=""
               fill
               className="!relative w-[110%]"
            />
            <p>
               Lo que mejor puedes hacer por ti, si quieres mejorar tu salud
               emocional, es hablar de tus intestinos, de tus hormonas, de tus
               neurotransmisores.
            </p>
            <p>
               Conectarte con tu esencia no siempre significa conectarse con una
               luz, simplemente puede ser conocer el mundo bioquímico en el que
               navegas cada instante.
            </p>
            <p className="w-full font-medium text-gray-600 ">
               Sácale el máximo provecho a todos los avances que la ciencia te
               brinda.
            </p>
            <p>
               Estás viviendo una época donde puedes explicar todos los
               fenómenos en tu organismo relacionados con tus emociones, sin
               necesidad de justificarlos con creencias que te mantienen
               limitado, confundido y estancado, sin poder alcanzar tus metas
               con coherencia.
            </p>

            <span className="p-2 py-4 bg-black text-yellow">
               YEP! Lo leiste correctamente!! Todo lo relacionado con conocer
               tus emociones, tiene que ver con tener resultados!
            </span>
            <p className="w-full text-xl font-bold">
               ¿Cómo puedes dar el primer paso?
            </p>
            <p>
               Comienza por evaluar si tus prácticas de cambios de mentalidad
               son efectivas, descarga este entrenamiento GRATUITO.
            </p>
            <SouthIcon className="text-[2rem] text-orange" />
         </div>
         <GiftButton />
      </div>
   );
}

export default WorldHasEvolved;

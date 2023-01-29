import React from "react";
import SouthIcon from "@mui/icons-material/South";
import GiftButton from "@shared/giftButton";
function ThreeReasons() {
   return (
      <div className="flex flex-col items-center w-full max-w-3xl p-12 bg-white my-14 ">
         <h2 className="mb-6 text-3xl font-bold ">
            Tres razones por las que es
            <p className="inline bg-yellow"> difícil escalar </p>
            tu negocio.
         </h2>
         <div className="flex flex-col items-center gap-4 mb-4 font-thin">
            <p>
               Para llevar a otros niveles tu empresa necesitas formar líderes
               iguales o mejores que tú, en tu equipo de trabajo, pero cuando no
               tienes claro tus procesos mentales es muy difícil transmitir lo
               que sabes y replicar tu modelo de éxito.
            </p>
            <p>
               La segunda razón es la falta de tiempo para formarte e
               implementar las nuevas tecnologías y tendencias a tus procesos de
               marketing y desarrollo de productos y servicios. Ser emprendedor
               a veces se siente como una carrera contra el tiempo, desgastante,
               agotador pero entiéndelo NO tienes por que hacerlo todo !
            </p>
            <p>
               La tercera razón es NO poder diversificar, crear, aplicar
               variabilidad a tu servicio o producto , utilizando los mismos
               recursos humanos, infraestructura y conocimiento que ya tienes y
               has dejado de aprovechar cada oportunidad que los cambios de la
               humanidad te brindan.
            </p>
            <p>
               La forma más fácil de tener una mente altamente creativa es
               logrando tener coherencia emocionalmente.
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

export default ThreeReasons;

import React from "react";
import SouthIcon from "@mui/icons-material/South";

function BadPractices() {
   return (
      <div className="flex justify-center w-fit">
         <div className="flex flex-col items-center max-w-[min(42rem,80%)] bg-white px-14 ">
            <span className="text-3xl mb-4  mt-[4rem]  font-bold leading-7">
               No nos enseñan que el liderazgo empieza por saber gestionar tus
               propias emociones y poder tener mejor comunicación con los demás.
            </span>
            <span className="p-4 mb-10 font-semibold bg-[#e8e6e6] text-orange leading-4">
               Estas son las prácticas que durante siete años me mantuvieron
               estancada en varios aspectos de mi vida, quiero contarte lo que
               puedes evitar para que nada vuelva a frenar tu impulso de tus
               emprendimientos.
            </span>
            <span className="flex flex-col items-center text-[#777]">
               <span>
                  <p>
                     ❌Prácticas que te llenen de información sin orientación
                     hacia un avance escalonado.
                  </p>
                  <p className="mb-2">👎 Te mantiene estancado.</p>
                  <p>
                     ❌Prácticas que no tengan metodologías visuales y creativas
                     para aprender a percibir las emociones con todos tus
                     sentidos.
                  </p>
                  <p className="mb-2">
                     👎 Formas un concepto de tus emociones en lugar de una
                     percepción y te confundes más.
                  </p>
                  <p>
                     ❌Prácticas que te enseñan sobre las emociones basados en
                     fantasías en lugar de datos científicos.
                  </p>
                  <p className="mb-2">
                     👎Nunca lograrás entender que tu cuerpo se expresa en
                     químicos y como has creado los hábitos que ta hacen sentir
                     mal.
                  </p>
                  <p className="mb-6">
                     Siempre buscaras culpables de lo que sientes o
                     intermediarios para que te ayuden a sentirte bien.
                  </p>
                  <p>
                     Tú puedes formar un criterio que te permita evaluar si las
                     terapias, cursos o retiros que estás haciendo, son
                     realmente efectivos!
                  </p>
                  ​
               </span>
               <p>
                  Inscríbete y recibirás directo en tu email esta guía gratis
               </p>
               <span className="my-12">
                  <SouthIcon className="text-orange text-[3rem]" />
               </span>
            </span>
         </div>
      </div>
   );
}

export default BadPractices;

import React from "react";

function Header() {
   return (
      <div className="bg-[#e8e6e6] w-full p-4  flex justify-center">
         <div className="max-w-[60ch] w-[90vw] flex flex-col items-center">
            <h2 className="text-2xl font-bold">CoherenteMENTE</h2>
            <p>(Entrenamientos online individual y para equipos de trabajo)</p>
            <p className="mt-4">
               La forma más fácil de tener una mente altamente creativa es
               logrando tener coherencia emocional, comienza por evaluar que
               esta limitando tu creatividad con este entrenamiento Gratuito.
            </p>
         </div>
      </div>
   );
}

export default Header;

import React from "react";

function WhatWillYouGet() {
   return (
      <div className="bg-white w-[90vw] max-w-3xl p-8 mt-4 leading-4 flex flex-col items-center">
         <p className="text-2xl font-bold w-full">Preguntas frecuentes</p>
         <span className="bg-[#c7c7c7] flex justify-center w-full px-8 p-4 mt-6">
            <p className="max-w-[50ch]">
               ¿Cómo vamos a crear una estrategia de extensión? Asesorías online
               de capacitación según tu capacidad de crecimiento.
            </p>
         </span>
         <span className="bg-[#c7c7c7] flex justify-center w-full px-8 p-4 mt-6">
            <p className="max-w-[50ch]">
               ¿Después de la capacitación cómo es el proceso de implementación?
               Te daremos asesorías de acompañamiento y seguimiento (Sesión 1:1
               )
            </p>
         </span>
         <span className="bg-[#c7c7c7] flex justify-center w-full px-8 p-4 mt-6">
            <p className="max-w-[50ch]">
               ¿Tiene devolución del dinero garantizada? No, no te brindaremos
               paquetes prefabricados, la asesoría es personalizada, solo pagas
               al inicio de cada sesión, haciendo flexible tu capacidad de pago
               y que puedas analizar poco a poco si lo que aprendes te esta
               ayudando.
            </p>
         </span>
         <span className="bg-[#c7c7c7] flex justify-center w-full px-8 p-4 mt-6">
            <p className="max-w-[50ch]">
               Nota: Asesorías y programas de financiamiento, son distintas en
               cada país por lo tanto no hace parte de la asesoría.
            </p>
         </span>
         <p className="text-[#777] mx-8  font-bold my-14">
            En esta asesoría haremos ejemplos prácticos, con pasos fáciles de
            seguir y puedas implementar desde el principio desde lo básico hasta
            lo más técnico.
         </p>

         <a
            href="https://wa.link/f40q5a"
            rel="noreferrer"
            target="_blank"
            className="border-black border-[3px] py-2 px-10 font-semibold mx-auto text-center mb-8"
         >
            Daya, creemos juntos algo nuevo para mi negocio.
         </a>
      </div>
   );
}

export default WhatWillYouGet;

import React from "react";

const tecnologicalServices = [
   "Web sites",
   "Pixels",
   "Email Marketing",
   "Integración de pagos",
];

function Asesorias() {
   return (
      <div>
         <div className=" text-white w-[90vw] max-w-3xl flex flex-col gap-6 font-thin leading-5">
            <h2 className="text-3xl font-semibold text-yellow">
               Asesorías online de implementación de tecnologías.
            </h2>
            <p>
               Revisamos tus plataformas y hacemos una evaluación completa de
               problemas técnicos.
            </p>
            <p>Integramos tecnologías que te hacen falta.</p>
            <p>
               Revisamos o integramos pixel de TikTok y Facebook en tus campañas
               de marketing.
            </p>
            <p>
               Te damos una capacitación básica de lo mínimo que necesitas
               saber, puedas delegar y formular soluciones a tu criterio.
            </p>
            <p>
               Asesorías para que continues integrando nuevas tecnologías a tu
               negocio.
            </p>
         </div>
         <div className="flex flex-wrap items-center justify-center gap-2 my-12 max-w-[90vw]">
            {tecnologicalServices.map((service) => (
               <div
                  key={service}
                  className="text-white hexagon bg-[#555] aspect-square flex flex-col items-center justify-center px-4 w-[30vw] sm:max-w-[13ch]    text-center text-sm"
               >
                  {service}
               </div>
            ))}
         </div>
      </div>
   );
}

export default Asesorias;

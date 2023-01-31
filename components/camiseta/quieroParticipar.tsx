import React from "react";

function QuieroParticipar() {
   return (
      <div className="w-full max-w-3xl flex flex-col bg-black text-[#ccc] items-center p-6 leading-5 gap-5">
         <h2 className="text-white text-center text-2xl font-bold">
            <p>TENGO UNA EMPRESA Y QUIERO</p>
            <p>PARTICIPAR</p>
         </h2>
         <p>
            Si alguna vez pensaste que por el tipo de producto o servicio que
            brindas, no tenías la oportunidad de contribuir con el bienestar
            emocional de tus clientes, estabas desperdiciando una oportunidad de
            conexión con ellos.
         </p>
         <span className="flex flex-wrap justify-center max-w-[97vw] overflow-hidden">
            Pregúntame{" "}
            <a
               target="_blank"
               href="mailto:info@dayamuneton.com"
               className="ml-1"
               rel="noreferrer"
               // type="email"
            >
               info@dayamuneton.com
            </a>
         </span>
         <p>
            Te ayudamos a crear oportunidades para demostrar lo mucho que te
            importan tus clientes.
         </p>
         <a
            href="https://wa.link/32f839"
            target="_blank"
            className="border-yellow border-[3px] p-4 flex flex-col items-center"
            rel="noreferrer"
         >
            <span className="text-white text-center mb-4">
               <p>Daya, Quiero expresar apoyo y compromiso</p>
               <p>con la salud emocional de mis clientes</p>
            </span>
            <p>Escríbeme por WhatsApp, click aquí</p>
         </a>
      </div>
   );
}

export default QuieroParticipar;

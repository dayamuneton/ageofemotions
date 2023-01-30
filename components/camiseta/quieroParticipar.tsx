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
         <p>Pregúntame info@dayamuneton.com</p>
         <p>
            Te ayudamos a crear oportunidades para demostrar lo mucho que te
            importan tus clientes.
         </p>
         <div className="border-yellow border-[3px] p-4 flex flex-col items-center">
            <span className="text-white text-center mb-4">
               <p>Daya, Quiero expresar apoyo y compromiso</p>
               <p>con la salud emocional de mis clientes</p>
            </span>
            <p>Escríbeme por WhatsApp, click aquí</p>
         </div>
      </div>
   );
}

export default QuieroParticipar;

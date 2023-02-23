import React from "react";

function Faq() {
   return (
      <div className="flex flex-col items-center w-full bg-white">
         <h2 className="my-6 text-4xl font-bold font-play-fair">
            Preguntas Frecuentes
         </h2>
         <span className="w-[90vw] max-w-2xl flex flex-col items-center">
            <p className="w-full text-orange">
               No encuentro mi PDF ¿Que puedo hacer?
            </p>
            <p className="font-thin">
               El PDF esta programado para que lo puedas descargar en tu email
               después del pago , si no lo encuentras de inmediato probablemente
               esta en Spam o en Promociones ¿Cómo pasar un correo de spam a la
               bandeja de entrada?
            </p>
            <span className="flex flex-col items-center my-12 w-[95%]">
               <p className="font-semibold">
                  Para mover un correo electrónico de la sección de promociones
                  a la bandeja de entrada, puedes seguir los siguientes pasos:
               </p>
               <ol className="font-thin list-decimal w-[90%]">
                  <li>
                     En la computadora, Abre tu correo electrónico y ve a la
                     sección de promociones.
                  </li>
                  {/* <li>
                        Encuentra el correo electrónico que deseas mover a la
                        bandeja de entrada. Este correo electrónico es de Ama y
                        Libérate.
                     </li> */}
                  <li>
                     Haz click y mantén presionado el correo electrónico para
                     seleccionarlo.
                  </li>
                  <li>
                     Sin soltar el click, arrastra el correo electrónico hacia
                     la bandeja de entrada.
                  </li>
                  <li>
                     Suelta el click y el correo electrónico se moverá de la
                     sección de promociones a la bandeja de entrada.
                  </li>
               </ol>
            </span>
            <p className="w-full text-orange">
               Qué pasa si otra persona hace el pago. ¿Le llega el PDF a esa
               persona?
            </p>
            <p className="font-thin">
               No, el email no tiene porque ser el mismo que esta registrado con
               la tarjeta de pago, solo debes escribir el email donde quieres
               recibir el PDF en el formulario de arriba y tendrás acceso
               inmediato.
            </p>
            <p className="w-full mt-6 text-orange">
               ¿Si no estoy satisfecho con la información, Tendré reembolso de
               mi dinero ?
            </p>
            <p className="font-thin">
               Solo en los productos de 30 dolares hacia abajo, no retornamos el
               dinero. Si tienes alguna duda es mejor que descargues de manera
               GRATUITA La guía: 3 FILTROS QUE NO PUEDEN FALTAR PARA PARA SABER
               SI TUS PRÁCTICAS DE CAMBIOS DE MENTALIDAD SON EFECTIVAS. Esto te
               brinda un espectro amplio y general de la forma como se
               desarrolla todo el programa.{" "}
            </p>
            <p className="w-full mt-6 text-orange">
               ¿En el programa Age of emotions, tendré reembolso de mi dinero?
            </p>
            <p className="mb-8 font-thin">
               Si, te retornaremos el dinero sin hacerte ninguna pregunta, 100 %
               Garantizado. Debes solicitar tu devolución al correo
               info@dayamuneton.com durante los primeros 30 días del programa
               que tiene una duración de 10 Semanas.
            </p>
         </span>
      </div>
   );
}

export default Faq;

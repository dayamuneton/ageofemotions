import Image from "next/image";
import React from "react";
import SouthIcon from "@mui/icons-material/South";
import Head from "next/head";
import Navbar from "@shared/navbar";
import FooterBottom from "@shared/footer/footerBottom";

function SuccessSubscription() {
   return (
      <div className="flex flex-col items-center w-full h-[100vh] overflow-x-hidden">
         <Head>
            <title>Gracias</title>
            <meta name="description" content="Regalo Adquirido" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Navbar />
         <div className="flex-1">
            <h1 className="my-12 text-5xl font-bold text-center font-play-fair">
               Gracias
            </h1>
            <span className="mx-auto relative flex aspect-square w-[10rem]">
               <Image src="/AmaYLiberateLogo.png" fill alt="" />
            </span>
            <div className="mx-auto max-w-[70ch] w-[95%]">
               <p className="my-8 text-xl font-bold font-play-fair ">
                  ¡Felicitaciones! Acabas de adquirir con éxito el acceso al al
                  regalo de este programa Ama & Libérate.
               </p>
               <div className="flex ">
                  <SouthIcon className="text-orange text-[2rem]" />
                  <div className="w-[90%]">
                     <p className="font-semibold text-center">
                        Por favor, lee con atención la siguiente información
                        para que conozcas como trabajaremos
                     </p>
                     <span>
                        <p className="font-semibold">PASO 1:</p>
                        <p className="font-thin">
                           Revisa tu email para que puedas tener acceso al
                           regalo, si no lo encuentras de inmediato
                           probablemente esta en promociones
                        </p>
                     </span>
                     <span className="flex flex-col items-center my-12">
                        <p className="font-semibold">
                           Para mover un correo electrónico de la sección de
                           promociones a la bandeja de entrada, puedes seguir
                           los siguientes pasos:
                        </p>
                        <ol className="font-thin list-decimal w-[90%]">
                           <li>
                              En la computadora, Abre tu correo electrónico y ve
                              a la sección de promociones.
                           </li>
                           <li>
                              Encuentra el correo electrónico que deseas mover a
                              la bandeja de entrada. Este correo electrónico es
                              de Ama y Libérate.
                           </li>
                           <li>
                              Haz click y mantén presionado el correo
                              electrónico para seleccionarlo.
                           </li>
                           <li>
                              Sin soltar el click, arrastra el correo
                              electrónico hacia la bandeja de entrada.
                           </li>
                           <li>
                              Suelta el click y el correo electrónico se moverá
                              de la sección de promociones a la bandeja de
                              entrada.
                           </li>
                        </ol>
                     </span>
                     <span>
                        <p className="font-semibold">PASO 2:</p>
                        <p className="font-thin">
                           Si deseas compartir conmigo lo que has aprendido, lo
                           que te ha servido, lo que te hubiera gustado evitar
                           en tus procesos de cambios de mentalidad te invito a
                           que conversemos, resolveremos las dudas, me cuentas
                           que es lo que más te confunde acerca de las emociones
                           en una charla amena pero muy productiva.
                        </p>
                        <p className="font-thin">
                           Realmente estoy comprometida con la forma que las
                           personas aprenden sobre las emociones y quiero
                           aprender de ti.
                        </p>
                     </span>

                     <span className="flex flex-col my-12">
                        <p className="font-semibold">
                           Comparte tu número de WhatsApp al siguiente correo
                           electrónico.
                        </p>
                        <a
                           href="mailto:info@amayliberate.com"
                           className="text-blue-400 underline"
                        >
                           info@amayliberate.com
                        </a>
                        <p className="font-thin">
                           En pocas horas me contactaré contigo por WhatsApp, te
                           contaré lo que me paso a mi también.
                        </p>
                     </span>
                  </div>

                  <SouthIcon className="text-orange text-[2rem]" />
               </div>
            </div>
         </div>
         <FooterBottom />
      </div>
   );
}

export default SuccessSubscription;

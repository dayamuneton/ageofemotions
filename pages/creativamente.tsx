// import BadPractices from "@shared/badPractices";
// import GiftForYou from "@shared/giftforyou";
import ExtensionStrategy from "@components/creativamente/extensionStrategy";
import OpenRoads from "@components/creativamente/openRoads";
import WhatWillYouGet from "@components/creativamente/whatWillYouGet";
import FooterBottom from "@shared/footer/footerBottom";
import Navbar from "@shared/navbar";
import Head from "next/head";
import Link from "next/link";
import React from "react";

function CreativaMente() {
   return (
      <div className="flex flex-col items-center w-full h-full bg-[#fafafa]">
         <Head>
            <title>CreativaMENTE</title>
            <meta
               name="description"
               content="En medio de una crisis mundial de salud mental este programa Ama y Libérate, te ayuda a liberarte de la confusión, dolor y el miedo ganando percepción corporal de tus emociones por medio del arte."
            />
            <meta
               name="keywords"
               content="Arte, Ciencia, Tecnología, Amor, Liberate, Regalo"
            />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Navbar />
         <div className="bg-[#e8e6e6] w-full p-4  flex justify-center">
            <div className="max-w-[60ch] w-[90vw] flex flex-col items-center">
               <h2 className="text-2xl font-bold">CreativaMENTE</h2>
               <p>Asesoría 1:1</p>
               <span className="mt-4">
                  <p className="inline mr-1 font-semibold">CreativaMENTE</p>
                  vamos a crear juntos,
                  <p className="inline mx-1 font-medium underline">emprender</p>
                  y ofrecer servicios/productos que, quizás, cuando empezaste el
                  negocio,
                  <p className="inline mx-1 font-medium">
                     no te habrías ni imaginado.
                  </p>
               </span>
            </div>
         </div>
         <ExtensionStrategy />
         <Link
            href="/"
            className="p-4 px-6 my-6 font-semibold rounded-lg bg-orange w-fit"
         >
            APÚNTAME A LA LISTA DE ESPERA
         </Link>
         <OpenRoads />
         <WhatWillYouGet />
         <FooterBottom />
      </div>
   );
}

export default CreativaMente;

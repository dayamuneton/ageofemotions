// import BadPractices from "@shared/badPractices";
// import GiftForYou from "@shared/giftforyou";
import QuieroParticipar from "@components/camiseta/quieroParticipar";
import ThreeReasons from "@components/solidariamente/3reasons";
import ExtensionStrategy from "@components/solidariamente/extensionStrategy";
import OpenRoads from "@components/solidariamente/openRoads";
import WhatWillYouGet from "@components/solidariamente/whatWillYouGet";
import FooterBottom from "@shared/footer/footerBottom";
import Navbar from "@shared/navbar";
import Head from "next/head";
import Link from "next/link";
import React from "react";

function CreativaMente() {
   return (
      <div className="flex flex-col items-center w-full h-full bg-[#fafafa]">
         <Head>
            <title>SolidariaMENTE</title>
            <meta
               name="description"
               content="Aprende a crear sistemas que te permitan expandirte.
                        Implementa tecnologías que te ayuden a escalar tu empresa
                        Creemos impacto social que te permita crecer junto con tu comunidad."
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
               <h2 className="text-2xl font-bold">SolidariaMENTE</h2>
               <p>Asesoría 1:1</p>
            </div>
         </div>
         <ThreeReasons />
         <ExtensionStrategy />
         <a
            href="https://wa.link/tytz2y"
            target="_blank"
            rel="noreferrer"
            className="p-4 px-6 my-6 font-semibold rounded-lg bg-orange w-fit"
         >
            APÚNTAME A LA LISTA DE ESPERA
         </a>
         <OpenRoads />
         <WhatWillYouGet />
         <div className="flex justify-center w-full my-6">
            <QuieroParticipar />
         </div>
         <FooterBottom />
      </div>
   );
}

export default CreativaMente;

import Header from "@/components/coherentemente/header";
import StructureOfYourGoals from "@/components/coherentemente/structureOfYourGoals";
import { CoherenteMenteProvider } from "@/context/coherenteMenteContext";
import BadPractices from "@/components/badPractices";
import FooterBottom from "@/components/footer/footerBottom";
import GiftForYou from "@/components/giftforyou";
import Navbar from "@/components/navbar";
import Head from "next/head";
import React from "react";

function Coherentemente() {
   return (
      <CoherenteMenteProvider>
         <div className="flex flex-col items-center w-full h-full">
            <Head>
               <title>CoherenteMente</title>
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

            <Header />

            <GiftForYou />

            <div className="bg-[#faf8f5] w-full py-12">
               <BadPractices />
            </div>
            <StructureOfYourGoals />
            <FooterBottom />
         </div>
      </CoherenteMenteProvider>
   );
}

export default Coherentemente;

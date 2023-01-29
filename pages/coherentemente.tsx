import StructureOfYourGoals from "@components/coherentemente/structureOfYourGoals";
import BadPractices from "@shared/badPractices";
import FooterBottom from "@shared/footer/footerBottom";
import GiftForYou from "@shared/giftforyou";
import Navbar from "@shared/navbar";
import Head from "next/head";
import React from "react";

function Coherentemente() {
   return (
      <div className="flex flex-col w-full h-full">
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

         <div className="bg-[#e8e6e6] w-full p-4  flex justify-center">
            <div className="max-w-[60ch] w-[90vw] flex flex-col items-center">
               <h2 className="text-2xl font-bold">CoherenteMENTE</h2>
               <p>
                  (Entrenamientos online individual y para equipos de trabajo)
               </p>
               <p className="mt-4">
                  La forma más fácil de tener una mente altamente creativa es
                  logrando tener coherencia emocional, comienza por evaluar que
                  esta limitando tu creatividad con este entrenamiento Gratuito.
               </p>
            </div>
         </div>

         <GiftForYou />

         <div className="bg-[#faf8f5] py-12">
            <BadPractices />
         </div>
         <StructureOfYourGoals />
         <FooterBottom />
      </div>
   );
}

export default Coherentemente;

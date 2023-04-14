import CamisetaTextImg from "@/components/camiseta";
import Ageofemotions from "@/components/camiseta/ageofemotions";
import AyudameAayudar from "@/components/camiseta/ayudameaayudar";
import History from "@/components/camiseta/history";
import LograrQueEntiendan from "@/components/camiseta/lograrQueEntiendan";
import QuieroParticipar from "@/components/camiseta/quieroParticipar";
import TrabajaConmigo from "@/components/camiseta/trabajaConmigo";
import CamisetaButton from "@/components/camisetaButton";
import FooterBottom from "@/components/footer/footerBottom";
import Navbar from "@/components/navbar";
import Head from "next/head";
import Image from "next/image";
import React from "react";

function Camiseta() {
   return (
      <div className="flex flex-col items-center w-full h-full">
         <Head>
            <title>Camiseta</title>
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
         <div className="flex flex-col items-center w-full bg-white ">
            <h1 className="flex flex-col items-center my-6 text-3xl font-bold max-w-[100vw] overflow-hidden">
               <p>La camiseta</p>
               <span className="flex flex-wrap justify-center">
                  que
                  <p className="inline mx-1 text-yellow">TRANSFORMARÁ</p>
               </span>
               <span className="flex flex-wrap justify-center">
                  Dolor en
                  <p className="inline mx-1 text-white bg-[#777]">
                     inspiración
                  </p>
               </span>
            </h1>
         </div>
         <div className="bg-[#e9e7e6] flex flex-col items-center py-8 w-full">
            <CamisetaTextImg />
            <div className="text-sm font-thin leading-4 w-[80vw] max-w-3xl flex flex-col items-center gap-3">
               <p className="w-full">Nunca me rendí, aunque fue doloroso!</p>
               <p>
                  Para ayudar a mi hijo y mi hermano a entender sus emociones,
                  diseñé un programa durante el tiempo que mi hijo no le
                  interesaba vivir, ahora nuestra historia no es un triste
                  cuento del pasado, en lugar de eso, es una historia viviente
                  de superación e inspiración para ayudar a otras personas en la
                  misma situación
               </p>
               <p>
                  Esta camiseta también representa la posibilidad que este
                  programa pueda crecer más, expandirse más y beneficiar a más
                  personas en todo el mundo.
               </p>
               <CamisetaButton />
            </div>
         </div>
         <LograrQueEntiendan />
         <Ageofemotions />
         <AyudameAayudar />

         <div className="bg-[#fafafa] w-full flex flex-col items-center">
            <History />
            <div className="w-[80vw] max-w-[30ch] flex flex-col items-center mb-6">
               <span className="flex relative w-full aspect-[2/3]">
                  <Image src="/camiseta.jpg" alt="" fill />
               </span>
               <span className="text-orange  text-xl font-bold text-center leading-5 mt-2 mb-8">
                  <p>USD $1,000,000</p>
                  <p>Un millón de Dolares</p>
               </span>
               <CamisetaButton />
            </div>
         </div>
         <div className="flex flex-col items-center w-full bg-[#f4f4f4]">
            <QuieroParticipar />
            <TrabajaConmigo />
         </div>
         <FooterBottom />
      </div>
   );
}

export default Camiseta;

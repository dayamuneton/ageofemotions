import Asesorias from "@components/tecnologicamente/asesorias";
import Situaciones from "@components/tecnologicamente/situaciones";
import Team from "@components/tecnologicamente/team";
import FooterBottom from "@shared/footer/footerBottom";
import Navbar from "@shared/navbar";
import Head from "next/head";
import React from "react";

function Tecnologicamente() {
   return (
      <div className="flex flex-col items-center w-full h-full bg-[#fafafa]">
         <Head>
            <title>TecnológicaMENTE</title>
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

         <div className="bg-[#e8e6e6] w-full p-4  flex justify-center pb-16">
            <div className="max-w-[60ch] w-[90vw] flex flex-col items-center">
               <h2 className="text-2xl font-bold">TecnológicaMENTE</h2>
               <p>Servicio personalizado</p>
            </div>
         </div>

         <div className="relative flex flex-col items-center w-full bg-black">
            <div className="absolute w-full top-[-3rem]">
               <span className="p-8 text-xl bg-white border-4 border-yellow w-[90vw] max-w-2xl mx-auto font-cutive flex flex-col text-center">
                  <p>Que la tecnología no sea lo que te</p>
                  <p>este deteniendo !</p>
               </span>
            </div>

            <Situaciones />
            <Asesorias />
         </div>
         <Team />
         <FooterBottom />
      </div>
   );
}

export default Tecnologicamente;

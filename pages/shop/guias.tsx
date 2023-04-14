import Banner from "@/components/shopguiaspdf/banner";
import ComingSoon from "@/components/shopguiaspdf/comingSoon";
import Galeria from "@/components/shopguiaspdf/galeria";
import { GaleriaProvider } from "@/context/galeriaContext";
import { getGaleria } from "@/integrations/firebase/galeria";
import { Product } from "@/models/productModel";
import FooterBottom from "@/components/footer/footerBottom";
import Navbar from "@/components/navbar";
import Head from "next/head";
import React from "react";

export async function getStaticProps() {
   const { galeria, commingSoon } = await getGaleria();

   return {
      props: {
         galeria: JSON.stringify(galeria),
         commingSoon: JSON.stringify(commingSoon),
      },
   };
}

function GuiasPDF(props: { galeria: string; commingSoon: string }) {
   return (
      <GaleriaProvider galeria={props.galeria} commingSoon={props.commingSoon}>
         <div className="flex flex-col items-center overflow-hidden">
            <Head>
               <title>Shop </title>
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
            <Banner />
            <Galeria />
            <ComingSoon />
            <div className="flex flex-col items-center w-full p-2 my-4 bg-yellow">
               <p className="text-2xl font-bold">
                  ENRIQUECE TU EXPERIENCIA DE VIDA
               </p>
               <p className="tracking-[.2rem] bg-white ">
                  Conociendo tus emociones
               </p>
            </div>
            <FooterBottom />
         </div>
      </GaleriaProvider>
   );
}

export default GuiasPDF;

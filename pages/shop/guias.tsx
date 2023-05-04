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
import Image from "next/image";
import Link from "next/link";

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
            <div className="bg-[#E8E6E6] my-8 w-full flex justify-center gap-12 p-10 flex-col sm:flex-row items-center">
               <span className="relative flex !aspect-[3/4]  h-[25rem]">
                  <Image
                     src="/PortadaOlvidasteTuCuerpo.png"
                     fill
                     alt="Portada Shop"
                  ></Image>
               </span>
               <div className="flex flex-col justify-center text-lg max-w-[40ch] gap-6">
                  <div className="font-bold">
                     <p className="text-[#C7C7C7]">By Daya Muneton</p>
                     <p className="text-2xl">OLVIDASTE TU CUERPO</p>
                     <p className="text-xl">Y NO PUEDES ENCONTRAR PAZ</p>
                  </div>
                  <div className="flex flex-col gap-4 text-base">
                     <p className="font-bold">
                        Los beneficios de leer y ver esta guia
                     </p>
                     <p>
                        Ganar consciencia que en tu cuerpo olvidado está la paz
                        que buscas.
                     </p>
                     <p>
                        No le dejes la responsabilidad a la esperanza para
                        encontrar tu paz, la paz es una práctica.
                     </p>
                     <p>
                        Ganar consciencia que tú eres el responsable de saturar
                        tus emociones.
                     </p>
                  </div>
                  <div className="w-full ">
                     <span className="flex justify-between text-2xl font-medium">
                        <p className="text-[#9F2747]">47.00 usd</p>
                        <p className="text-[#FFCBAA] line-through">67.00 usd</p>
                     </span>
                     <Link
                        href="/checkoutpdf/olvidaste-tu-cuerpo"
                        className="flex justify-center w-full py-4 border-2 border-black"
                     >
                        SHOP NOW
                     </Link>
                  </div>
               </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full p-2 text-base font-bold text-center uppercase lg:flex-row lg:text-xl bg-yellow lg:whitespace-nowrap">
               <div className="flex flex-col items-center sm:flex-row">
                  todos los siguientes productos digitales a
                  <span className="flex mx-1 text-white bg-black">
                     <p className="px-1 text-blue-300">$3.00 USD</p>
                  </span>
               </div>
               <div>SOLO PARA NUESTROS MIEMBROS</div>
            </div>
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

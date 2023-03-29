import RedeemContent from "@/components/redeem";
import FooterBottom from "@/shared/footer/footerBottom";
import Navbar from "@/shared/navbar";
import Head from "next/head";
import React from "react";

function Redeem() {
   return (
      <div className="flex flex-col items-center w-full  bg-blueGray-darker min-h-[100vh] h-full">
         <Head>
            <title>Redimir</title>
            <meta name="giftcard" content="Ama & Liberate Redeem Gift Card" />
            <meta
               name="keywords"
               content="Amor, Libertad, Ciencia Tecnología, Arte, GiftCard, redimir, regalo"
            />
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <Navbar />

         <RedeemContent />

         <FooterBottom />
      </div>
   );
}

export default Redeem;

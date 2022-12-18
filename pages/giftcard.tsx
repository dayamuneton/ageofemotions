import GiftcardContent from "@components/giftcard";
import FooterBottom from "@shared/footer/footerBottom";
import Navbar from "@shared/navbar";
import Head from "next/head";
import React from "react";

function Giftcard() {
   return (
      <div className="flex flex-col items-center w-full  bg-blueGray-darker min-h-[100vh] h-full max-w-[100vw] overflow-hidden">
         <Head>
            <title>Gift Card</title>
            <meta name="giftcard" content="Ama & Liberate Gift Card" />
            <meta
               name="keywords"
               content="Amor, Libertad, Ciencia Tecnología, Arte, GiftCard"
            />
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <Navbar />

         <GiftcardContent />

         <FooterBottom />
      </div>
   );
}

export default Giftcard;

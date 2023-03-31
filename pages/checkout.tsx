import Head from "next/head";
import React from "react";
import CartItems from "@/components/checkout/cartItems";
import Navbar from "@/shared/navbar";
import FooterBottom from "@/shared/footer/footerBottom";
import ShopNowButton from "@/components/checkout/shopNowButton";

function Checkout() {
   return (
      <div className="flex flex-col items-center w-full h-full min-h-screen bg-[url(/bgManchas1.png)] bg-cover bg-no-repeat">
         <Head>
            <title>Checkout</title>
            <meta name="description" content="Términos de uso Ama Y Liberate" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Navbar />

         <div className="flex-1">
            <div className="bg-[#fafafa] p-8 rounded-xl drop-shadow-xl my-12 ">
               <p className="mb-2 text-xl font-medium">Mi Carrito</p>
               <div className="flex flex-col w-full ">
                  <CartItems />
               </div>
               <ShopNowButton />
            </div>
         </div>
         <FooterBottom />
      </div>
   );
}

export default Checkout;

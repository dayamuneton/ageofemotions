import Image from "next/image";
import Link from "next/link";
import React from "react";
import GiftcardForm from "./giftcardForm";

function GiftcardContent() {
   return (
      <>
         <div className="max-w-[95vw] md:max-w-[42rem] w-full my-12 flex flex-col items-center justify-center">
            <span className="relative flex aspect-[4/3] w-[90vw] max-w-lg shadow-[0px_0px_7rem_#26266b]">
               <Image src="/A&Lgiftcard.png" alt="" fill />
            </span>
         </div>
         <p className="text-2xl font-bold text-white w-[90vw] max-w-md text-center">
            Ingresa el email a donde va a llegar este Gift Card con el código
            para redimir el regalo.
         </p>
         <GiftcardForm />
         <div className=" w-[90vw] max-w-[95vw] md:max-w-md text-center mb-6 text-white">
            <h2 className="text-lg font-bold text-[#b592f8]">IMPORTANTE:</h2>
            <p>*El código es de un solo uso</p>
            <p>
               Para redimirlo debes entrar el código
               <Link href="/redeem" className="mx-1 text-blue-400 underline">
                  Aquí
               </Link>
            </p>
            <p>
               También puedes compartir este link y redimirlo
               www.amayliberate/redeem
            </p>
         </div>
      </>
   );
}

export default GiftcardContent;

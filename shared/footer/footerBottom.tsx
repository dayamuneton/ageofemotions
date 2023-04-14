import React from "react";
import Link from "next/link";
import ContactLinks from "@/components/contactLinks/contactLinks";

function FooterBottom() {
   return (
      <div className="flex flex-col items-center w-full gap-2 p-4 pb-8 text-white bg-black border-t-2 border-white">
         <span className="flex flex-col items-center text-sm md:flex-row text-center max-w-[95vw] overflow-hidden">
            <p className="whitespace-nowrap w-full max-w-[95vw]">
               Daya Muneton © Todos los derechos reservados.
            </p>
            <span className="flex flex-col items-center justify-center w-full gap-1 sm:flex-row sm:ml-1">
               <Link
                  className="pr-2 border-r"
                  href="/politica-de-privacidad"
                  target="_blank"
               >
                  Política de privacidad
               </Link>

               <Link href="/terminos-de-uso" target="_blank">
                  Términos de uso
               </Link>
            </span>
         </span>

         <span className="flex flex-col sm:flex-row items-center max-w-[95vw]">
            <p className="whitespace-nowrap">Email:&nbsp;</p>
            <a
               href="mailto:info@dayamuneton.com"
               target="_blank"
               rel="noreferrer"
            >
               info@dayamuneton.com
            </a>
         </span>
         <ContactLinks />
      </div>
   );
}

export default FooterBottom;

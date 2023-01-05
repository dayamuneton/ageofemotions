import React from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";

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
               href="mailto:info@amayliberate.com"
               target="_blank"
               rel="noreferrer"
            >
               info@amayliberate.com
            </a>
         </span>
         <span className="flex items-center">
            <Link href="https://www.facebook.com/dayamuneton" target="_blank">
               <FacebookIcon />
            </Link>
            {/* <Link
               href="https://www.youtube.com/channel/UCcwzib11TVK-eQVbwgDfN5g/featuredj"
               target="_blank"
            >
               <YouTubeIcon className="text-[1.7rem]" />
            </Link> */}
            <Link href="https://www.instagram.com/dayamuneton/" target="_blank">
               <InstagramIcon />
            </Link>
         </span>
      </div>
   );
}

export default FooterBottom;

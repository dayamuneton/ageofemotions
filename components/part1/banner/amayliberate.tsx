import Image from "next/image";
import React from "react";

function AmaYliberateLogo() {
   return (
      <span className="lg:absolute lg:left-[-4.5rem] lg:top-[-4.5rem] z-[200]">
         <span className="relative aspect-square h-[9rem] mx-auto flex mt-4 ">
            <Image src="/LogoAgeOfEmotions.png" alt="" fill />
         </span>
      </span>
   );
}

export default AmaYliberateLogo;

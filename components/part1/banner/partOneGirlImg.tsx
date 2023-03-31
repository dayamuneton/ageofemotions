import Image from "next/image";
import React from "react";

function PartOneGirlImg() {
   return (
      <span className="flex aspect-[2/3] relative mx-auto w-[90vw] lg:max-w-[18rem]">
         <Image src="/RunningMan.png" alt="" fill priority />
      </span>
   );
}

export default PartOneGirlImg;

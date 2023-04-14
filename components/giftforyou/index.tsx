import Image from "next/image";
import React from "react";
import Text from "./text";

function GiftForYou() {
   return (
      <div className="flex justify-center w-[95vw] max-w-3xl pt-6">
         <div className="flex flex-col md:flex-row md:max-w-[95%] w-[48rem]  items-center">
            <Text />
            <span className="relative flex w-[95vw]  md:w-[100%] aspect-[1/1]">
               <Image
                  src="/AcuarelaModernoVerde.png"
                  priority={true}
                  fill
                  alt="Daya Muneton Rose"
               />
            </span>
         </div>
      </div>
   );
}

export default GiftForYou;

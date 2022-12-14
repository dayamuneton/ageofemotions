import Image from "next/image";
import React from "react";
import Text from "./text";

function GiftForYou() {
   return (
      <div className="flex justify-center w-full pt-6">
         <div className="flex flex-col-reverse md:flex-row md:max-w-[95%] w-[48rem]  items-center">
            <Text />
            <span className="relative flex w-[95vw]  md:w-[100%] border-blueGray border-[1.5rem] aspect-[1/1]">
               <Image
                  src="/dayamunetonRose.jpg"
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

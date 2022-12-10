import Image from "next/image";
import React from "react";
import StarIcon from "@mui/icons-material/Star";

function Mockups() {
   const stars = [];
   for (let i = 0; i < 5; i++) {
      stars.push(i);
   }
   return (
      <div className="w-full ">
         <div className="relative w-[90%] ">
            <span className="flex relative aspect-[5/3] w-full">
               <Image src="/h_amayliberate.png" alt="" fill />
            </span>
            <div className="absolute right-[-10%] bottom-[-40%]">
               <span className="flex relative aspect-[1/2] w-[15vw] lg:w-[4.5vw]">
                  <Image src="/v_amayliberate.png" alt="" fill />
               </span>
            </div>
         </div>
         <div className="flex flex-col items-center w-[calc(100%-15vw)] lg:w-[calc(100%-4.5vw)]">
            <p className="text-3xl font-medium lg:text-lg whitespace-nowrap font-belsey">
               Parte 1
            </p>
            <p className="mt-1 font-light text-sm lg:text-[0.75rem] lg:mt-0 leading-3">
               Available In spanish only
            </p>
            <span className="text-[#ffdf5e] flex whitespace-nowrap drop-shadow-[0px_0px_0.05rem_#000]">
               {stars.map((star) => (
                  <StarIcon key={star} className="lg:text-[1rem]" />
               ))}
            </span>
         </div>
      </div>
   );
}

export default Mockups;

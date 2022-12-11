import React from "react";
import RotatedImage from "./rotatedImage";
import ItsForYouIfText from "./text";

function ItsForYouIf() {
   return (
      <div className="bg-[#faf8f5] pb-4 flex flex-col items-center w-full">
         <div className="bg-[#bdc8d8] w-full md:w-[80vw] lg:max-w-3xl pt-8 z-[100] ">
            <div className="relative flex flex-col-reverse items-center w-full text-4xl md:flex-row">
               <span className="z-[-1] md:absolute md:ml-12 md:mt-[10rem] mb-10 ">
                  <RotatedImage />
               </span>
               <span className="text-[#ccf10f]  font-bold text-center z-20 flex items-center justify-center md:w-[60%] md:ml-auto">
                  <p className="w-[80%] md:my-[4rem] mb-16">
                     Este programa es para ti si...
                  </p>
               </span>
            </div>

            <span>
               <ItsForYouIfText />
            </span>
         </div>
      </div>
   );
}

export default ItsForYouIf;

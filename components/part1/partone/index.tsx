import React from "react";
import PartOneGirlImg from "./partOneGirlImg";
import TextAndLogo from "./textAndLogo";

function PartOne() {
   return (
      <div className="bg-[#fefeff] flex flex-col items-center w-full pt-8 ">
         <div className="lg:flex lg:mt-[10rem] lg:w-[43rem] lg:pl-[4.5rem]">
            <TextAndLogo />
         </div>
      </div>
   );
}

export default PartOne;

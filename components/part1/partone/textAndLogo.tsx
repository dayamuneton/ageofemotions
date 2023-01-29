import React from "react";
import AmaYliberateLogo from "./amayliberate";
import PartOneGirlImg from "./partOneGirlImg";
import TextPartOne from "./textPartOne";

function TextAndLogo() {
   return (
      <div className="relative z-0 flex flex-col-reverse lg:flex-row">
         <div className="lg:absolute top-[-7rem] lg:right-[-70%] z-[-10]">
            <PartOneGirlImg />
         </div>
         <div>
            {/* <AmaYliberateLogo /> */}
            <TextPartOne />
         </div>
      </div>
   );
}

export default TextAndLogo;

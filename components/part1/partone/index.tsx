import Image from "next/image";
import React from "react";
import AmaYliberateLogo from "./amayliberate";
import PartOneGirlImg from "./partOneGirlImg";
import TextAndLogo from "./textAndLogo";
// import TextPartOne from "./textPartOne";

function PartOne() {
  return (
    <div className="bg-[#fefeff] flex flex-col items-center w-full pt-8">
      <div className="lg:flex lg:mr-[15vw] lg:mt-[10rem] relative">
        <div className="z-10">
          <TextAndLogo />
        </div>
        <div className="lg:absolute top-[-10vw] lg:right-[-20vw] z-0">
          <PartOneGirlImg />
        </div>
      </div>
    </div>
  );
}

export default PartOne;

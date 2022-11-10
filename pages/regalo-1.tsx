import React from "react";
import About from "../components/about";
import ArtIsTheNewWay from "../components/artIsTheNewWay";
import Footer from "../components/footer";
import ItsForYouIf from "../components/itsforyouif";
import LetMeGuess from "../components/letMeGuess";
import PartOne from "../components/partone";
import WhatWillYouGet from "../components/whatWillYouGet";

function GiftPart1() {
  return (
    <div className="flex flex-col items-center w-full overflow-hidden">
      <div className="flex flex-col items-center w-full">
        <div className="bg-[#fefeff] flex flex-col items-center w-full pt-8">
          <PartOne />
          <LetMeGuess />
        </div>
        <div className="bg-[#faf8f5] flex w-full justify-center">
          <ArtIsTheNewWay />
        </div>
        <div className="bg-[#fafbfb] flex w-full justify-center">
          <WhatWillYouGet />
        </div>
        {/* <div className="bg-[#fafbfb] h-[15rem]">aaaa</div> */}
        <ItsForYouIf></ItsForYouIf>
        <div className="w-full bg-gradient-to-b from-[#bdc9d9] to-[#f2e2f6] items-center flex flex-col p-8">
          <About></About>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default GiftPart1;

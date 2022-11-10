import React from "react";
import AmaYliberateLogo from "./amayliberate";
import TextPartOne from "./textPartOne";

function TextAndLogo() {
  return (
    <div className="relative">
      <span className="lg:absolute lg:left-[-4rem] lg:top-[-4rem]">
        <AmaYliberateLogo />
      </span>
      <span>
        <TextPartOne />
      </span>
    </div>
  );
}

export default TextAndLogo;

import Image from "next/image";
import React from "react";

function AmaYliberateLogo() {
  return (
    <span className="relative aspect-square h-[9rem] mx-auto flex mt-4 z-[200]">
      <Image src="/AmaYLiberateLogo.png" alt="" fill />
    </span>
  );
}

export default AmaYliberateLogo;

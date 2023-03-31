import Image from "next/image";
import React from "react";

function Logo() {
  return (
    <div className="w-full flex justify-center bg-[#fafbfb] p-2">
      <span className="relative flex aspect-square w-[7rem]">
        <Image src="/AmaYLiberateLogo.png" alt="" fill />
      </span>
    </div>
  );
}

export default Logo;

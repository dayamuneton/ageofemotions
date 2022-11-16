import Image from "next/image";
import React from "react";

function RotatedImage() {
  return (
    <div className="bg-[#fefeff] p-3 rounded w-fit drop-shadow-xl rotate-[7deg]">
      <span className="flex relative aspect-square w-[70vw] md:w-[17rem] grayscale">
        <Image src="/jumping.png" alt="" fill />
      </span>
    </div>
  );
}

export default RotatedImage;

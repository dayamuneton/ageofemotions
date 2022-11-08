import Image from "next/image";
import React from "react";
import Text from "./text";

function MediaAndText() {
  return (
    <div className="flex flex-col md:flex-row ">
      <Text></Text>
      <span className="relative w-full border-gray-300 border-[1rem] aspect-square ">
        <Image
          src="/dayamunetonRose.jpg"
          // objectFit="contain"
          priority={true}
          // className="m-4/"
          // layout="fill"
          fill
          alt="Daya Muneton Rose"
        />
      </span>
    </div>
  );
}

export default MediaAndText;

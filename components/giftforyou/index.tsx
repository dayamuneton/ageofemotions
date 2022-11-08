import Image from "next/image";
import React from "react";
import GiftButton from "../shared/giftButton";
import Text from "./text";

function GiftForYou() {
  return (
    <div className="flex justify-center pt-6">
      <div className="flex flex-col md:flex-row md:max-w-[80%] items-center">
        <Text></Text>
        <span className="relative flex w-[95vw] md:w-[40vw] border-[#bdc9d9] border-[1.5rem] aspect-[1/1]">
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
    </div>
  );
}

export default GiftForYou;

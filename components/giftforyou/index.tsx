import Image from "next/image";
import React from "react";
import Text from "./text";

function GiftForYou() {
  return (
    <div className="flex justify-center pt-6">
      <div className="flex flex-col-reverse md:flex-row md:max-w-[95%] items-center">
        <Text></Text>
        <span className="relative flex w-[95vw] md:min-w-[35vw] md:w-[40vw] border-[#bdc9d9] border-[1.5rem] aspect-[1/1]">
          <Image
            src="/dayamunetonRose.jpg"
            priority={true}
            fill
            alt="Daya Muneton Rose"
          />
        </span>
      </div>
    </div>
  );
}

export default GiftForYou;

import Image from "next/image";
import React from "react";

interface ComingSoonCardProps {
   product: {
      link: string;
      photoURL: string;
      title: string;
   };
}

function ComingSoonCard({ product }: ComingSoonCardProps) {
   return (
      <div className="w-[95%] mx-auto flex flex-col items-center  ">
         <Image
            src={product.photoURL}
            alt=""
            fill
            priority
            className="!relative object-contain !h-fit"
         />

         {/* <div className="bg-[#fafafa] flex flex-col flex-1 w-full p-4">
           <p className="my-auto text-center">{product.title}</p>

        </div> */}
      </div>
   );
}

export default ComingSoonCard;

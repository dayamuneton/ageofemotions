import Image from "next/image";
import React from "react";

interface StructureCardProps {
   title: string;
   photoURL: string;
   text: string;
   subTitle?: string;
   buttonText: string;
}

function StructureCard({
   title,
   photoURL,
   text,
   subTitle,
   buttonText,
}: StructureCardProps) {
   return (
      <div className="flex items-center border-[3px] rounded-[1.5rem] border-yellow max-w-[90vw] w-[80ch] px-12 p-8 bg-white m-4">
         <div>
            <span className="flex relative min-w-[8rem] aspect-[52/66] border-[8px] rounded-lg border-black">
               <Image src={photoURL} alt="" fill />
            </span>
            <p className="text-2xl font-bold text-center text-orange">PDF</p>
         </div>
         <div className="flex flex-col py-8 pl-8">
            <h2 className="text-3xl font-bold text-center">{title}</h2>
            <p className="text-xl font-bold text-center font-play-fair">
               {subTitle}
            </p>
            <p className="my-6 font-medium">{text}</p>
            <button className="p-4 px-8 mx-auto text-sm font-semibold rounded-lg bg-orange w-[20rem]">
               {buttonText}
            </button>
         </div>
      </div>
   );
}

export default StructureCard;

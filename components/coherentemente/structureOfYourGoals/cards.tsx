import Image from "next/image";
import Link from "next/link";
import React from "react";

interface StructureCardProps {
   title: string;
   photoURL: string;
   text: string;
   subTitle?: string;
   buttonText: string;
   link: string;
}

function StructureCard({
   title,
   photoURL,
   text,
   subTitle,
   buttonText,
   link,
}: StructureCardProps) {
   return (
      <div className="flex flex-col md:flex-row items-center border-[3px] rounded-[1.5rem] border-yellow max-w-[90vw] w-[80ch] px-12 p-8 bg-white m-4">
         <div>
            <span className="flex relative min-w-[8rem] aspect-[52/66] border-[8px] rounded-lg border-black">
               <Image src={photoURL} priority alt="" fill />
            </span>
            <p className="text-2xl font-bold text-center text-orange">PDF</p>
         </div>
         <div className="flex flex-col py-8 sm:pl-8">
            <h2 className="text-3xl font-bold text-center">{title}</h2>
            <p className="text-xl font-bold text-center font-play-fair">
               {subTitle}
            </p>
            <p className="my-6 font-medium">{text}</p>
            <Link
               href={link}
               className="p-4 px-8 mx-auto text-sm font-semibold rounded-lg bg-orange sm:w-[20rem] text-center"
            >
               {buttonText}
            </Link>
         </div>
      </div>
   );
}

export default StructureCard;

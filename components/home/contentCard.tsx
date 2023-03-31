import React from "react";
import Image from "next/image";

interface CardProps {
   text?: string;
   title?: string;
   bgColor?: string;
}

function Card({ title, text, bgColor }: CardProps) {
   return (
      <div className="flex flex-col items-center p-8 bg-white border-2 border-black rounded-3xl">
         <span className="relative flex mb-4 border-b-2 border-orange h-[7rem] aspect-square">
            <Image src="/arte-filtro.jpg" alt="" fill />
         </span>
         <p className={`mb-2 text-2xl font-semibold ${bgColor}`}>{title}</p>
         <p className="max-w-[25ch]">{text}</p>
      </div>
   );
}

export default Card;

import React from "react";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import Image from "next/image";

interface CardProps {
  text?: string;
  title?: string;
}

function Card({ title, text }: CardProps) {
  return (
    <div className="flex flex-col items-center p-8 bg-white border-2 border-black rounded-3xl">
      <span className="relative flex mb-4 border-b-2 border-red-500 h-[5rem] aspect-square">
        <Image src="/CardIcon.png" alt="" fill />
      </span>
      <p className="bg-[#e4f10c] font-semibold text-2xl mb-2">{title}</p>
      <p className="md:max-w-[10rem] max-w-[40ch] text-sm">{text}</p>
    </div>
  );
}

export default Card;

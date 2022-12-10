import React from "react";

interface HabitCardProps {
   title: string;
   text: string;
}

function HabitCard({ title, text }: HabitCardProps) {
   return (
      <div className="bg-[#bcc8d9] p-9 pt-4 rounded-2xl flex flex-col items-center lg:max-w-[30ch] w-[70vw]">
         <h2 className="bg-[#e4f10c] text-xl font-semibold my-2 font-popings whitespace-nowrap mb-4">
            {title}
         </h2>
         <p className="text-sm leading-4">{text}</p>
      </div>
   );
}

export default HabitCard;

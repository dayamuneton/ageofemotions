import React from "react";

interface HabitCardProps {
  title: string;
  text: string;
}

function HabitCard({ title, text }: HabitCardProps) {
  return (
    <div className="bg-[#bcc8d9] px-8 py-4 rounded-2xl flex flex-col items-center lg:max-w-[25ch] max-w-[45vw]">
      <h2 className="bg-[#e4f10c] text-xl font-semibold my-2 font-popings">
        {title}
      </h2>
      <p className="text-sm font-light leading-4">{text}</p>
    </div>
  );
}

export default HabitCard;

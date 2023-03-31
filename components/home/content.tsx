import React from "react";
import Card from "./contentCard";
import { contentCards } from "./contentCards";

function Content() {
   return (
      <div>
         <h2 className="text-xl font-semibold">Lo que recibirás...</h2>
         <div className="flex flex-col items-center">
            <span className="flex flex-col items-center w-11/12 max-w-md gap-2">
               <p className="text-[5rem] font-bold text-[#045184] leading-[5rem]">
                  3 FILTROS
               </p>
               <p className="text-3xl font-bold bg-yellow">
                  QUE NO PUEDEN FALTAR
               </p>
               <p className="text-2xl font-semibold text-center">
                  Para saber si tus prácticas de gestión de emociones son
                  efectivas.
               </p>
            </span>
            <div className="flex flex-col gap-2 my-4 lg:flex-row">
               {contentCards.map(({ title, text, bgColor }) => (
                  <Card
                     key={title}
                     title={title}
                     text={text}
                     bgColor={bgColor}
                  />
               ))}
            </div>
         </div>
      </div>
   );
}

export default Content;

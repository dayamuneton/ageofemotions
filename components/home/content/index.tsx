import React from "react";
import Card from "./card";
import { contentCards } from "./contentCards";

function Content() {
   return (
      <div>
         <h2 className="text-xl font-semibold">Lo que recibirás...</h2>
         <div className="flex flex-col items-center">
            <span className="flex items-end w-11/12 gap-2">
               <p className="text-[5rem] font-bold text-white leading-[5rem]">
                  3
               </p>
               <p className="text-2xl font-extrabold font-play-fair">
                  Técnicas que puedes hacer desde hoy y comenzar a ver
                  resultados ​
               </p>
            </span>
            <div className="flex flex-col gap-2 my-4 lg:flex-row">
               {contentCards.map(({ title, text }) => (
                  <Card key={title} title={title} text={text} />
               ))}
            </div>
         </div>
      </div>
   );
}

export default Content;

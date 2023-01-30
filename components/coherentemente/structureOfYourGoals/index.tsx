import React from "react";
import StructureCard from "./cards";
import StructureHeader from "./structureHeader";

const pdfs = [
   {
      title: "Estructura De Tus Metas Con Una Mente NO Física",
      photoURL: "/CoverMenteNoFisica.png",
      text: "Comienza por organizar toda tu información e identifíca  la estructura emocional que has formado para alcanzar tus metas, cuando te percibes con una mente NO física y puedas proyectarte y enfocarte en obtener resultados.",
      buttonText: "OBTÉN ACCESO INMEDIATO",
   },
   {
      title: "Estructura De Tus Metas Con Una Mente Física",
      photoURL: "/CoverMenteFisica.png",
      text: "Si quieres ser libre de decidir como quieres vivir o ver la vida, para lograr resultados en coherencia con lo que te propones,  aprende más sobre tu cuerpo unificado a tu mente.",
      buttonText: "OBTÉN ACCESO INMEDIATO",
   },
   {
      title: "AGE OF EMOTIONS",
      photoURL: "/CoverMenteFisica.png",
      subTitle: "10 Prácticas Para Ganar Percepción Corporal De Tus Emociones.",
      text: "No percibir tu cuerpo como parte de tu consciencia, ha hecho que sigas gestionando emociones como si vivieras en otra época y te ha llevado a tener muchas confusiones, dolor, miedo y estancamiento en varios aspectos de tu vida.",
      buttonText: "SABER MÁS...",
   },
];

function StructureOfYourGoals() {
   return (
      <div className="w-full bg-[#fafafa] flex justify-center">
         <div className="flex flex-col w-[90vw] max-w-3xl  items-center  ">
            <StructureHeader />
            {pdfs.map(({ title, text, photoURL, buttonText, subTitle }) => (
               <StructureCard
                  key={title}
                  title={title}
                  text={text}
                  buttonText={buttonText}
                  subTitle={subTitle}
                  photoURL={photoURL}
               />
            ))}
         </div>
      </div>
   );
}

export default StructureOfYourGoals;

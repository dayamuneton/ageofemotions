import React from "react";
import StructureCard from "./cards";
import StructureHeader from "./structureHeader";

export const pdfs = [
   {
      title: "Estructura De Tus Metas Con Una Mente NO Física",
      photoURL: "/CoverMenteNoFisica.png",
      description:
         "Comienza por organizar toda tu información e identifíca  la estructura emocional que has formado para alcanzar tus metas, cuando te percibes con una mente NO física y puedas proyectarte y enfocarte en obtener resultados.",
      buttonText: "OBTÉN ACCESO INMEDIATO",
      link: `mente_no_fisica`,
      prices: [
         {
            priceID:
               process.env
                  .NEXT_PUBLIC_STRIPE_ESTRUCTURA_DE_TUS_METAS_MENTE_NO_FISICA,
         },
      ],

      mailerlite_group:
         process.env.NEXT_PUBLIC_MAILERLITE_MENTE_NO_FISICA_GROUP_ID,
      price: "$27.00 USD",
      imgAspectRatio: "7/10",
   },
   {
      title: "Estructura De Tus Metas Con Una Mente Física",
      photoURL: "/MenteFisica.png",
      description:
         "Si quieres ser libre de decidir como quieres vivir o ver la vida, para lograr resultados en coherencia con lo que te propones,  aprende más sobre tu cuerpo unificado a tu mente.",
      buttonText: "OBTÉN ACCESO INMEDIATO",
      link: `mente_fisica`,
      prices: [
         {
            priceID:
               process.env
                  .NEXT_PUBLIC_STRIPE_ESTRUCTURA_DE_TUS_METAS_MENTE_FISICA,
         },
      ],
      mailerlite_group:
         process.env.NEXT_PUBLIC_MAILERLITE_MENTE_FISICA_GROUP_ID,
      price: "$74.00 USD",
      imgAspectRatio: "7/10",
   },
   {
      title: "AGE OF EMOTIONS",
      photoURL: "/PortadaAOE10Practica.png",
      subTitle: "10 Prácticas Para Ganar Percepción Corporal De Tus Emociones.",
      description:
         "No percibir tu cuerpo como parte de tu consciencia, ha hecho que sigas gestionando emociones como si vivieras en otra época y te ha llevado a tener muchas confusiones, dolor, miedo y estancamiento en varios aspectos de tu vida.",
      buttonText: "SABER MÁS...",
      link: "parte1",
      imgAspectRatio: "7/10",
   },
];

function StructureOfYourGoals() {
   return (
      <div className="w-full bg-[#fafafa] flex justify-center">
         <div className="flex flex-col w-[90vw] max-w-3xl  items-center  ">
            <StructureHeader />
            {pdfs.map((product) => (
               <StructureCard key={product.title} product={product} />
            ))}
         </div>
      </div>
   );
}

export default StructureOfYourGoals;

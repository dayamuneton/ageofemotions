import React from "react";
import ServiceCard from "./card";

const services = [
   {
      title: "CoherenteMENTE",
      subTitle: "Entrenamientos Online",
      text: "Aquí encontrarás talleres, programas y todo lo que necesitas para conocer mejor tus emociones por medio del arte, la ciencia y la tecnología y logres tener tus resultados con coherencia.",
      buttonText: "COMENZAR AHORA",
      buttonLink: "/coherentemente",
   },
   {
      title: "CreativaMENTE",
      subTitle: "Servicio personalizado",
      text: "Creemos juntos oportunidades de crecimiento implementando  marketing solidario para crecer de la mano con tu comunidad. Me encantaría capacitarte a ti y/o a tu equipo y formar líderes  y empáticos que te lleven a la cima. ",
      buttonText: "SABER MÁS...",
      buttonLink: "/creativamente",
   },
   {
      title: "TecnológicaMENTE",
      subTitle: "Servicio personalizado",
      text: "Te brindamos todo lo que necesitas para implementar nuevas tecnologías tu nueva estructura solidaria de tu Servicio o Producto.",
      buttonText: "SABER MÁS...",
      buttonLink: "/tecnologicamente",
   },
];

function ServicesCards() {
   return (
      <div className="flex flex-col lg:flex-row p-1 py-10 lg:max-w-3xl w-full items-strech bg-[#e8e6e6]">
         {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
         ))}
      </div>
   );
}

export default ServicesCards;

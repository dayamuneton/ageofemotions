import React from "react";
import ServiceCard from "./card";

const services = [
   {
      title: "CoherenteMENTE",
      subTitle: "Entrenamientos Online",
      text: "Me encantaría capacitar a ti y a tu equipo y formar líderes creativos y empáticos iguales o mejores que tú, que te lleven a la cima.",
      buttonText: "COMENZAR AHORA",
      buttonLink: "/coherentemente",
   },
   {
      title: "CreativaMENTE",
      subTitle: "Servicio personalizado",
      text: "Creemos juntos oportunidades para que diversifiques tus productos/Servicios y escales tu empresa a otros niveles. (Solo 3 cupos por mes) ",
      buttonText: "SABER MÁS...",
      buttonLink: "/creativamente",
   },
   {
      title: "TecnológicaMENTE",
      subTitle: "Servicio personalizado",
      text: "Encuentra todo lo que necesitas para implementar tecnológicamente tu nueva estructura diversificada de tu Servicio/producto.",
      buttonText: "SABER MÁS...",
      buttonLink: "/tecnologicamente",
   },
];

function ServicesCards() {
   return (
      <div className="flex flex-col lg:flex-row p-1 py-10 lg:max-w-3xl w-full items-center bg-[#e8e6e6]">
         {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
         ))}
      </div>
   );
}

export default ServicesCards;

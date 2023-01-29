import Link from "next/link";
import React from "react";

interface ServiceCardProps {
   service: {
      title: string;
      subTitle: string;
      text: string;
      buttonText: string;
      buttonLink: string;
   };
}

function ServiceCard({ service }: ServiceCardProps) {
   return (
      <div className="flex flex-col items-center p-4 py-10 m-1 text-sm font-light text-center bg-white max-w-[min(60ch,90vw)]">
         <p className="text-xl font-bold"> {service.title} </p>
         <p className="mb-2 font-medium"> {service.subTitle} </p>
         <p className="p-2 pb-8 text-start"> {service.text} </p>
         <Link
            href={service.buttonLink}
            className="w-full p-3 font-bold rounded-lg bg-orange"
         >
            {service.buttonText}
         </Link>
      </div>
   );
}

export default ServiceCard;

import Image from "next/image";
import React from "react";

const teamMembers = [
   {
      photoURL: "/team_alejandro.png",
      name: "Alejandro Agredo",
      link: "https://www.alejandroagredo.com/",
      description: "Desarrollador de páginas web.",
   },
   {
      photoURL: "/team_eiser.png",
      name: "Eiser Portilla",
      link: "https://www.linkedin.com/in/eiser-portilla-6a5359143/",
      description: "Desarrollador de páginas web.",
   },
   {
      photoURL: "/RedesDayaMunetonSq.png",
      name: "Daya Muneton",
      link: "https://www.instagram.com/dayamuneton/",
      description: "Especialista en Marketing.",
   },
];

function Team() {
   return (
      <div className="mb-16">
         <h2 className="my-12 text-4xl font-bold text-center text-yellow">
            Conoce Al Equipo
         </h2>
         <div className="flex md:flex-row md:gap-0 gap-4 justify-evenly md:items-stretch flex-col max-w-3xl w-[90vw] items-center">
            {teamMembers.map(({ photoURL, name, description, link }) => (
               <a
                  target="_blank"
                  rel="noreferrer"
                  href={link}
                  key={name}
                  className="flex flex-col items-center max-w-[25ch] w-full bg-[#fafafa] rounded-md drop-shadow-[.3rem_.3rem_.5rem_#e5e5e5] p-6  hover:scale-[1.01]"
               >
                  <span className="relative flex w-full overflow-hidden rounded-full aspect-square">
                     <Image src={photoURL} alt={name} fill />
                  </span>
                  <p className="my-4 font-play-fair"> {name} </p>
                  <p className="text-sm font-thin leading-4 text-center">
                     {description}
                  </p>
               </a>
            ))}
         </div>
      </div>
   );
}

export default Team;

import FooterBottom from "@shared/footer/footerBottom";
import Navbar from "@shared/navbar";
import Head from "next/head";
import Image from "next/image";
// import Link from "next/link";
import React from "react";

const tecnologicalServices = [
   "Web sites",
   "Pixels",
   "Email Marketing",
   "Integración de pagos",
];

const teamMembers = [
   {
      photoURL: "/team_alejandro.png",
      name: "Alejandro Agredo",
      linkedIn: "",
      description:
         "I'm a paragraph. Double click me or click Edit Text, it's easy.",
   },
   {
      photoURL: "/team_eiser.png",
      name: "Eiser Portilla",
      linkedIn: "",
      description:
         "I'm a paragraph. Double click me or click Edit Text, it's easy.",
   },
   {
      photoURL: "/RedesDayaMunetonSq.png",
      name: "Daya Muneton",
      linkedIn: "",
      description: "Especialista en Creadora de Age Of Emotions.",
   },
];

function Tecnologicamente() {
   return (
      <div className="flex flex-col items-center w-full h-full bg-[#fafafa]">
         <Head>
            <title>TecnológicaMENTE</title>
            <meta
               name="description"
               content="En medio de una crisis mundial de salud mental este programa Ama y Libérate, te ayuda a liberarte de la confusión, dolor y el miedo ganando percepción corporal de tus emociones por medio del arte."
            />
            <meta
               name="keywords"
               content="Arte, Ciencia, Tecnología, Amor, Liberate, Regalo"
            />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Navbar />
         <div className="bg-[#e8e6e6] w-full p-4  flex justify-center pb-16">
            <div className="max-w-[60ch] w-[90vw] flex flex-col items-center">
               <h2 className="text-2xl font-bold">TecnológicaMENTE</h2>
               <p>Servicio personalizado</p>
            </div>
         </div>
         <div className="relative flex flex-col items-center w-full bg-black">
            <div className="absolute w-full top-[-3rem]">
               <span className="p-8 text-xl bg-white border-4 border-yellow w-[90vw] max-w-2xl mx-auto font-cutive flex flex-col text-center">
                  <p>Que la tecnología no sea lo que te</p>
                  <p>este deteniendo !</p>
               </span>
            </div>
            <div className="pt-[9rem] text-white w-[90vw] max-w-2xl flex flex-col gap-6 font-thin leading-5 border-b-2 border-white">
               <h2 className="text-2xl font-medium">
                  Has pasado por estás situaciónes...
               </h2>
               <p>
                  Cuando quieres escalar tu negocio compras cursos de
                  mentalidad, de ventas y que al mismo tiempo te enseñan
                  implementar tecnologías para vender tus productos online.
               </p>
               <p>
                  Te recomiendan y te capacitan para integrar tecnologías para
                  transformar tu negocio físico a online y cuando algo sale mal
                  y te quedas frenado por varios días mientras tratas de
                  solucionar por tu lado y tu avance es muy lento.
               </p>
               <p>
                  En sus paquetes te ofrecen asesorías personalizadas por dos o
                  tres meses, entonces implementas e integras las plataformas y
                  cuando ya vas a probar si funciona el túnel, el embudo, el
                  pixel, el script de las campañas de publicidad que es en donde
                  mas necesitas ayuda, ya se acabaron los tres meses.
               </p>
               <p>
                  El problema es porque le compras al influencer más grande, al
                  que más sabe de ventas por su buena reputación y número de
                  seguidores, de esos que se metieron abarcar todo, pero no
                  tienen idea como responder al cliente y algunos asistentes no
                  están capacitados para ayudarte técnicamente.
               </p>
               <p className="p-2 text-black bg-white">
                  Tranquil@, tu capacidad de aprendizaje en tecnologías no tiene
                  nada que ver con tu capacidad de vender, no te detengas!!
               </p>
               <p>
                  Después de muchos años y de analizar muchos cursos entendí que
                  para sacarle todo el provecho a todos los gurus de los
                  secretos de las ventas y del marketing debes estar tú o tu
                  negocio preparado tecnológicamente primero, para poder
                  implementar con libertad todo tipo de estrategias.
               </p>
               <p>
                  Y que ellos no eran los más indicados para enseñarme la parte
                  técnica.
               </p>
               <p>
                  Si querías escalar tu negocio y has hecho de todo pero la
                  parte técnica te tiene frenado, te brindamos la asesoría y la
                  revisión e implementación técnica que tanto necesitas para que
                  todo funcione correctamente.
               </p>
               <p>
                  Para dar el primer paso escríbeme por WhatsApp haciendo click
                  siguiente botón.
               </p>
               <a
                  href="https://wa.link/lolg4d"
                  rel="noreferrer"
                  target="_blank"
                  className="py-3 mx-auto mb-4 text-sm font-medium text-black rounded-lg px-7 bg-orange w-fit"
               >
                  Daya, Revisa mi negocio online
               </a>
            </div>
            <div className=" text-white w-[90vw] max-w-3xl flex flex-col gap-6 font-thin leading-5">
               <h2 className="text-3xl font-semibold text-yellow">
                  Asesorías online de implementación de tecnologías.
               </h2>
               <p>
                  Revisamos tus plataformas y hacemos una evaluación completa de
                  problemas técnicos.
               </p>
               <p>Integramos tecnologías que te hacen falta.</p>
               <p>
                  Revisamos o integramos pixel de TikTok y Facebook en tus
                  campañas de marketing.
               </p>
               <p>
                  Te damos una capacitación básica de lo mínimo que necesitas
                  saber, puedas delegar y formular soluciones a tu criterio.
               </p>
               <p>
                  Asesorías para que continues integrando nuevas tecnologías a
                  tu negocio.
               </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 my-12 max-w-[90vw]">
               {tecnologicalServices.map((service) => (
                  <div
                     key={service}
                     className="text-white hexagon bg-[#555] aspect-square flex flex-col items-center justify-center px-4 w-[30vw] sm:max-w-[13ch]    text-center text-sm"
                  >
                     {service}
                  </div>
               ))}
            </div>
         </div>
         <div className="mb-16">
            <h2 className="my-12 text-4xl font-bold text-center text-yellow">
               Conoce Al Equipo
            </h2>
            <div className="flex md:flex-row justify-evenly flex-col max-w-4xl w-[90vw] items-center">
               {teamMembers.map(({ photoURL, name, description, linkedIn }) => (
                  <div
                     key={name}
                     className="flex flex-col items-center max-w-[20ch]"
                  >
                     <span className="relative flex w-full overflow-hidden rounded-full aspect-square">
                        <Image src={photoURL} alt={name} fill />
                     </span>
                     <p className="my-4 font-play-fair"> {name} </p>
                     <p className="text-sm font-thin leading-4 text-center">
                        {" "}
                        {description}{" "}
                     </p>
                  </div>
               ))}
            </div>
         </div>
         <FooterBottom />
      </div>
   );
}

export default Tecnologicamente;

import FooterBottom from "@shared/footer/footerBottom";
import Navbar from "@shared/navbar";
import Head from "next/head";
import React, { useState, FormEvent, useEffect } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
import { useRouter } from "next/router";
import { pdfs } from "@components/coherentemente/structureOfYourGoals";
import Image from "next/image";

function TuRegalo() {
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [email, setEmail] = useState("");
   const [terms, setTerms] = useState(false);
   const router = useRouter();
   const [pdf, setPdf] = useState<typeof pdfs[number] | null>();

   useEffect(() => {
      if (router.asPath === "/turegalo/[product]") return;
      console.log(router.asPath);

      setPdf(pdfs.find((el) => el.link === router.asPath) || null);
   }, [router]);

   useEffect(() => {
      if (pdf === null) {
         router.push("/coherentemente");
      }
   }, [router, pdf]);

   const redirectToCheckout = async (e: FormEvent) => {
      e.preventDefault();

      if (!pdf) return;

      const { product, mailerlite_group } = pdf;

      const payload = {
         email,
         firstName,
         lastName,
         product,
         mailerlite_group,
         cancel_url: router.asPath,
      };

      const response = await fetch("/api/saveDataInFirebase", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
         },
         body: JSON.stringify(payload),
      });
      const data = await response.json();
      const url = data.url;

      if (typeof url === "string") {
         router.push(url);
      }

      setEmail("");
      setFirstName("");
      setLastName("");
      setTerms(false);
   };

   return (
      <div className="flex flex-col items-center w-full h-[100vh] bg-[#fafafa]">
         <Head>
            <title>Tu Regalo</title>
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
         <h2 className="mt-8 text-3xl font-bold text-center font-play-fair">
            <p>Escribe el email donde quieres</p>
            <p>recibir el PDF </p>
         </h2>
         <p className="mb-4">Available only in spanish</p>
         {pdf && (
            <>
               <span className="flex relative min-w-[8rem] aspect-[52/66] border-[8px] rounded-lg border-black">
                  <Image src={pdf.photoURL || ""} priority alt="" fill />
               </span>
               <p className="text-center text-xl font-bold max-w-[90vw] my-4">
                  {pdf.title}
               </p>
            </>
         )}
         {/* <div className="flex w-fit"> */}
         <form
            className="bg-white p-8 w-[min(95%,40rem)]"
            onSubmit={redirectToCheckout}
         >
            <div className="flex flex-col gap-8 sm:gap-0 sm:flex-row">
               <span className="inputBox">
                  <label className="absolute top-[-1.5rem]" htmlFor="name">
                     Nombre
                  </label>
                  <input
                     className="inputs"
                     type="text"
                     name="name"
                     required
                     value={firstName}
                     onChange={(e) => setFirstName(e.target.value)}
                  />
               </span>

               <span className="inputBox">
                  <label className="absolute top-[-1.5rem]" htmlFor="lastname">
                     Apellido
                  </label>
                  <input
                     className="inputs"
                     type="text"
                     name="lastname"
                     value={lastName}
                     required
                     onChange={(e) => setLastName(e.target.value)}
                  />
               </span>

               <span className="inputBox">
                  <label className="absolute top-[-1.5rem]" htmlFor="email">
                     Email
                  </label>
                  <input
                     className="inputs"
                     type="email"
                     name="email"
                     required
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                  />
               </span>
            </div>

            <div className="flex flex-col items-center justify-between gap-2 mt-4 md:flex-row">
               <span>
                  <input
                     type="checkbox"
                     name="terms"
                     id=""
                     required
                     checked={terms}
                     onChange={() => setTerms(!terms)}
                  />
                  <label htmlFor="terms" className="px-2 text-sm">
                     Acepto los términos y condiciones
                  </label>
               </span>

               <button type="submit" className="p-2 px-8 text-white bg-black">
                  Recibir PDF
               </button>
            </div>
         </form>
         {/* </div> */}
         <span className="text-[.75rem] flex flex-col items-center border-b-[16px] border-yellow  pb-4">
            <div className="flex flex-col items-center sm:flex-row">
               <p>Daya Muneton © All rights reserved.</p>

               <span className="flex gap-1 sm:ml-1">
                  <Link href="/politica-de-privacidad" target="_blank">
                     Política de privacidad
                  </Link>
                  |
                  <Link href="/terminos-de-uso" target="_blank">
                     Términos de uso
                  </Link>
               </span>
            </div>

            <span className="flex items-center justify-between p-1 mt-2 text-white bg-black w-fit ">
               {/* <Link
                  href="https://www.facebook.com/dayamuneton"
                  target="_blank"
               >
                  <FacebookIcon className="text-[1.2rem]" />
               </Link> */}
               {/* <Link
                  href="https://www.youtube.com/channel/UCcwzib11TVK-eQVbwgDfN5g/featuredj"
                  target="_blank"
               >
                  <YouTubeIcon className="text-[1.4rem]" />
               </Link> */}
               <Link
                  href="https://www.instagram.com/dayamuneton/"
                  target="_blank"
               >
                  <InstagramIcon className="text-[1.2rem]" />
               </Link>
            </span>
         </span>
         <div className="flex flex-col items-center w-full bg-white">
            <h2 className="my-6 text-4xl font-bold font-play-fair">
               Preguntas Frecuentes
            </h2>
            <span className="w-[90vw] max-w-2xl flex flex-col items-center">
               <p className="w-full text-orange">
                  No encuentro mi PDF ¿Que puedo hacer?
               </p>
               <p className="font-thin">
                  El PDF esta programado para que lo puedas descargar en tu
                  email después del pago , si no lo encuentras de inmediato
                  probablemente esta en Spam o en Promociones ¿Cómo pasar un
                  correo de spam a la bandeja de entrada?
               </p>
               <span className="flex flex-col items-center my-12 w-[95%]">
                  <p className="font-semibold">
                     Para mover un correo electrónico de la sección de
                     promociones a la bandeja de entrada, puedes seguir los
                     siguientes pasos:
                  </p>
                  <ol className="font-thin list-decimal w-[90%]">
                     <li>
                        En la computadora, Abre tu correo electrónico y ve a la
                        sección de promociones.
                     </li>
                     {/* <li>
                        Encuentra el correo electrónico que deseas mover a la
                        bandeja de entrada. Este correo electrónico es de Ama y
                        Libérate.
                     </li> */}
                     <li>
                        Haz click y mantén presionado el correo electrónico para
                        seleccionarlo.
                     </li>
                     <li>
                        Sin soltar el click, arrastra el correo electrónico
                        hacia la bandeja de entrada.
                     </li>
                     <li>
                        Suelta el click y el correo electrónico se moverá de la
                        sección de promociones a la bandeja de entrada.
                     </li>
                  </ol>
               </span>
               <p className="w-full text-orange">
                  Qué pasa si otra persona hace el pago. ¿Le llega el PDF a esa
                  persona?
               </p>
               <p className="font-thin">
                  No, el email no tiene porque ser el mismo que esta registrado
                  con la tarjeta de pago, solo debes escribir el email donde
                  quieres recibir el PDF en el formulario de arriba y tendrás
                  acceso inmediato.
               </p>
               <p className="w-full mt-6 text-orange">
                  ¿Si no estoy satisfecho con la información, Tendré reembolso
                  de mi dinero ?
               </p>
               <p className="font-thin">
                  Solo en los productos de 30 dolares hacia abajo, no retornamos
                  el dinero. Si tienes alguna duda es mejor que descargues de
                  manera GRATUITA La guía: 3 FILTROS QUE NO PUEDEN FALTAR PARA
                  PARA SABER SI TUS PRÁCTICAS DE CAMBIOS DE MENTALIDAD SON
                  EFECTIVAS. Esto te brinda un espectro amplio y general de la
                  forma como se desarrolla todo el programa.{" "}
               </p>
               <p className="w-full mt-6 text-orange">
                  ¿En el programa Age of emotions, tendré reembolso de mi
                  dinero?
               </p>
               <p className="mb-8 font-thin">
                  Si, te retornaremos el dinero sin hacerte ninguna pregunta,
                  100 % Garantizado. Debes solicitar tu devolución al correo
                  info@dayamuneton.com durante los primeros 30 días del programa
                  que tiene una duración de 10 Semanas.
               </p>
            </span>
         </div>
         <FooterBottom />
      </div>
   );
}

export default TuRegalo;

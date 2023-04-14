import React, { FormEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { createPdfsCheckout } from "@/handlers/orders/createPdfsCheckout";
import { Product } from "@/models/productModel";
import ContactLinks from "../contactLinks/contactLinks";

function SignUpForm() {
   const [email, setEmail] = useState("");
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [terms, setTerms] = useState(false);

   const redirectToCheckout = async (e: FormEvent) => {
      e.preventDefault();

      if (
         !process.env.NEXT_PUBLIC_STRIPE_10_PRACTICES_PRODUCT ||
         !process.env.NEXT_PUBLIC_MAILERLITE_PART_ONE_GROUP_ID
      )
         return;

      const priceId = process.env.NEXT_PUBLIC_STRIPE_10_PRACTICES_PRODUCT;

      const practicasProduct = await new Product({
         id: "",
         title: "10 Prácticas Para Ganar Percepción Corporal De Tus Emociones.",
         handle: "10-practicas",
         images: ["/images/10-practicas.png"],
         category: "Parte 1",
         mailerlite_group: process.env.NEXT_PUBLIC_MAILERLITE_PART_ONE_GROUP_ID,
         priceId,
         priceIdForMembers: priceId,
         buttonText: "Comprar",
         description:
            "No percibir tu cuerpo como parte de tu consciencia, te ha llevado a tener muchas confusiones, dolor y estancamiento en varios aspectos de tu vida.",
      }).setPrice(false);

      const checkout = await createPdfsCheckout({
         cartItems: [practicasProduct],
         email,
         name: `${firstName} ${lastName}`,
         cancel_url: "parte1",
         success_url: "gracias",
      });

      const url = checkout.url;

      if (typeof url === "string") {
         router.push(url);
      }

      setEmail("");
      setFirstName("");
      setLastName("");
      setTerms(false);
   };

   const router = useRouter();
   const giftRef = useRef<HTMLDivElement>(null);
   useEffect(() => {
      if (router.asPath === "/signup") {
         giftRef.current?.scrollIntoView({ behavior: "smooth" });
      }
   }, [router]);
   return (
      <div
         ref={giftRef}
         className="bg-[#e9e7e6] flex flex-col items-center p-8 w-full sm:max-w-3xl my-8"
      >
         <span className="flex mb-2 text-xl font-bold text-center font-play-fair text-[#1b1655] font-popings">
            Inscríbete aquí y lo recibirás en tu correo
         </span>
         <form
            className="p-6 pb-2 w-[min(95%,40rem)]"
            onSubmit={redirectToCheckout}
         >
            <div className="flex flex-col gap-8 sm:gap-4 sm:flex-row">
               <span className="inputBox">
                  <label className="absolute top-[-1.5rem]" htmlFor="name">
                     Nombre
                  </label>
                  <input
                     className="signUpInputs"
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
                     className="signUpInputs"
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
                     className="signUpInputs"
                     type="email"
                     name="email"
                     required
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                  />
               </span>
            </div>

            <div className="flex flex-col items-center justify-between gap-2 mt-2 md:flex-row">
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
            </div>
            <div className="flex w-full">
               <button
                  type="submit"
                  className="p-2 px-8 mx-auto mt-2 text-black bg-orange"
               >
                  Inscríbete
               </button>
            </div>
         </form>

         <span className="text-[.75rem] flex flex-col items-center">
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
            <ContactLinks color="#fff" bgColor="#000" />
         </span>
      </div>
   );
}

export default SignUpForm;

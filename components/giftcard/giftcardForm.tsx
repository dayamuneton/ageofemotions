import React, { FormEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

function GiftcardForm() {
   const [email, setEmail] = useState("");
   const [terms, setTerms] = useState(false);
   const router = useRouter();

   const redirectToCheckout = async (e: FormEvent) => {
      e.preventDefault();

      const getGiftCard = true;

      const payload = {
         email,
         getGiftCard,
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
      setTerms(false);
   };

   return (
      <div className="bg-[#111] text-white flex flex-col items-center p-8 w-full sm:max-w-3xl my-8 shadow-[0px_0px_7rem_#26266b]">
         <form
            className="p-6 pb-2 w-[min(95%,40rem)] flex flex-col items-center"
            onSubmit={redirectToCheckout}
         >
            <div className="flex flex-col w-full gap-8 sm:gap-4 sm:flex-row">
               <span className="relative flex items-center w-full max-w-[95vw] md:max-w-md gap-1 mx-auto text-white">
                  <label className="absolute top-[-1.5rem]" htmlFor="email">
                     Email:
                  </label>
                  <input
                     className="text-black signUpInputs"
                     type="email"
                     name="email"
                     required
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                  />
               </span>
            </div>

            <div className="flex flex-col items-center justify-between w-full max-w-md gap-2 mx-auto mt-2 md:flex-row">
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
            <div className="flex w-full justify-center max-w-[95vw]">
               <button
                  type="submit"
                  className="p-2 px-8 mt-2 text-white bg-[#b592f8]"
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

            <span className="flex items-center justify-between p-1 mt-2 text-white bg-black w-fit ">
               <Link
                  href="https://www.facebook.com/dayamuneton"
                  target="_blank"
               >
                  <FacebookIcon className="text-[1.2rem]" />
               </Link>
               {/* <Link
                  href="https://www.youtube.com/channel/UCcwzib11TVK-eQVbwgDfN5g/featuredj"
                  target="_blank"
               >
                  <YouTubeIcon className="text-[1.45rem]" />
               </Link> */}
               <Link
                  href="https://www.instagram.com/dayamuneton/"
                  target="_blank"
               >
                  <InstagramIcon className="text-[1.2rem]" />
               </Link>
            </span>
         </span>
      </div>
   );
}

export default GiftcardForm;

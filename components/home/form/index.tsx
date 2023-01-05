import { FormEvent, useState, useEffect, useRef } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
import { useRouter } from "next/router";
import { reportLeadEvent } from "@pixelEvents/events";

function Form() {
   const [email, setEmail] = useState("");
   const [name, setName] = useState("");
   const [lastName, setLastName] = useState("");
   const [terms, setTerms] = useState(false);
   const router = useRouter();

   const subscribeToGift = async (e: FormEvent) => {
      e.preventDefault();

      const payload = {
         email: email,
         fields: {
            name: name,
            last_name: lastName,
         },
         groups: [process.env.NEXT_PUBLIC_MAILERLITE_GIFT_GROUP_ID],
      };

      const data = JSON.stringify(payload);

      const response = await fetch(
         process.env.NEXT_PUBLIC_MAILERLITE_SUBSCRIBERS_API_URL || "",
         {
            method: "POST",
            headers: {
               Authorization: `Bearer ${
                  process.env.NEXT_PUBLIC_MAILERLITE_API_KEY || ""
               }`,
               "Content-Type": "application/json",
               Accept: "application/json",
            },
            body: data,
         }
      );

      const jsonResponse = await response.json();

      await reportLeadEvent("/", email, name);

      router.push("/gracias-regalo");

      console.log(jsonResponse);

      setEmail("");
      setName("");
      setLastName("");
      setTerms(false);
   };

   const giftRef = useRef<HTMLDivElement>(null);
   useEffect(() => {
      const scrollToGift = () => {
         if (router.asPath === "/gift") {
            giftRef.current?.scrollIntoView({ behavior: "smooth" });
         }
      };
      scrollToGift();
   }, [router]);
   return (
      <div
         ref={giftRef}
         className="bg-[#faf8f5] flex flex-col items-center p-8 w-full"
      >
         <span className="flex mb-10 text-3xl font-bold font-play-fair">
            Recibe tu
            <p className="pr-2 bg-yellow">&nbsp;Regalo</p>
         </span>
         <form
            className="bg-[#fdfdf9] p-8 w-[min(95%,40rem)]"
            onSubmit={subscribeToGift}
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
                     value={name}
                     onChange={(e) => setName(e.target.value)}
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
                  Quiero mi regalo
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
      </div>
   );
}

export default Form;

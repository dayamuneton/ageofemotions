import React, { useState, FormEvent, useEffect } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/utils/firebaseConfig";
import { useAuth } from "@/context/authContext";
import { firstLetterUpperCaseEachWord } from "@/utils/firstLetterUpperCase";
import { Product, productConverter } from "@/models/product";

function CheckoutForm() {
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [email, setEmail] = useState("");
   const [terms, setTerms] = useState(false);
   const router = useRouter();
   const [pdf, setPDF] = useState<Product | null>();
   const { currentUser, profile } = useAuth();
   const [cancelURL, setCancelURL] = useState("");

   useEffect(() => {
      const { product, psrc } = router.query;

      if (!product || typeof product !== "string") return;

      setCancelURL((psrc as string) || "coherentemente");

      const loadPDF = async () => {
         const productSnapshot = await getDoc(
            doc(db, "pdf_products", product).withConverter(productConverter)
         );

         if (!productSnapshot.exists()) {
            setPDF(null);
            return;
         }

         const productData = productSnapshot.data();
         await productData.setPrice(profile?.isMember);
         setPDF(productData);
      };
      loadPDF();
   }, [router, profile]);

   useEffect(() => {
      if (pdf === null) {
         router.push(`/${cancelURL}`);
      }

      if (!pdf) return;

      if (currentUser) {
         setEmail(currentUser.email);
         const name = firstLetterUpperCaseEachWord(currentUser.displayName);
         const [first_name, last_name] = name;
         setFirstName(first_name || "");
         setLastName(last_name || "");
      }
   }, [router, pdf, cancelURL, currentUser]);

   const redirectToCheckout = async (e: FormEvent) => {
      e.preventDefault();

      if (!pdf) return;

      const { mailerlite_group } = pdf;

      let priceID = pdf.price?.id || pdf.priceId;

      if (!priceID) {
         console.error("No price found for this product");
         return;
      }

      const payload = {
         email,
         firstName,
         lastName,
         priceID,
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

   if (!pdf) {
      return <></>;
   }

   return (
      <div className="flex flex-col items-center w-full">
         <Image
            src={pdf.images[0] || ""}
            priority
            alt=""
            fill
            className="flex !relative w-full max-w-[8rem]  border-[8px] rounded-lg border-black"
         />
         <p className="text-center text-xl font-bold max-w-[90vw] my-4">
            {pdf.title}
         </p>
         <p>
            {pdf.price_in_dollars?.toLocaleString("en-US", {
               style: "currency",
               currency: "USD",
            })}
         </p>
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
      </div>
   );
}

export default CheckoutForm;

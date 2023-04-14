import { useAuth } from "@/context/authContext";
import FooterBottom from "@/shared/footer/footerBottom";
import Navbar from "@/shared/navbar";
import { db } from "@/integrations/firebase/firebaseConfig";
import { arrayUnion, doc, getDoc, setDoc } from "firebase/firestore";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState, useEffect, FormEvent } from "react";
import { createMembershipOrder } from "@/handlers/orders/createMembershipOrder";

function Membresia() {
   const { profile, currentUser } = useAuth();
   const [isMember, setIsMember] = useState(false);
   const [memberCode, setMemberCode] = useState("");
   const router = useRouter();

   const redirectToAuth = () => {
      const url = `/auth/ingresa?src=${encodeURIComponent(router.asPath)}`;

      router.push(url);
   };

   useEffect(() => {
      setIsMember(profile?.isMember || false);
   }, [profile]);

   const handleSubmit = async () => {
      // e.preventDefault();

      if (!currentUser) {
         redirectToAuth();
         return;
      }

      if (!memberCode || memberCode === "") return;

      const codeSnapshot = await getDoc(doc(db, "member_codes", memberCode));

      if (!codeSnapshot.exists()) return;

      const codeHasBeenRedeemed = codeSnapshot.data().redeemed;

      if (codeHasBeenRedeemed) return;

      await setDoc(
         doc(db, "member_codes", memberCode),
         {
            redeemed: true,
            redeemerEmail: currentUser.email,
         },
         { merge: true }
      );

      await setDoc(
         doc(db, "users", currentUser.email),
         {
            isMember: true,
         },
         { merge: true }
      );
   };

   const buyMembership = async () => {
      if (!currentUser) {
         redirectToAuth();
         return;
      }

      const checkout = await createMembershipOrder({
         email: currentUser.email,
      });

      if (!checkout?.url) return;
      router.push(checkout.url);
   };

   return (
      <div className="flex flex-col items-center overflow-hidden bg-[#fafafa] min-h-screen">
         <Head>
            <title>Membresia</title>
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

         {!isMember ? (
            <div className="flex flex-col items-center w-[90vw] max-w-xl">
               <span className="flex flex-col items-center my-8 text-3xl font-medium text-center">
                  <p>ENRIQUECE</p>
                  <p>TU EXPERIENCIA DE VIDA </p>
                  <p>CONOCIENDO TUS EMOCIONES</p>
                  <p className="text-white bg-black">
                     Arte, ciencia y Tecnología
                  </p>
               </span>
               <Image
                  src="/HazteMiembro.png"
                  alt=""
                  fill
                  className="!relative "
               />
               <button
                  onClick={buyMembership}
                  className="px-8 py-4 my-6 text-lg font-medium text-white bg-black"
               >
                  QUIERO SER MIEMBRO
               </button>
               {currentUser && (
                  <>
                     <p className="text-xl font-medium text-gray-500">
                        $14.00USD Anuales
                     </p>
                     <p className="px-2 my-4 text-2xl font-bold text-gray-500 bg-yellow">
                        TU NOS IMPORTAS
                     </p>
                     <span className="flex items-center gap-2 mb-[5rem] text-xl font-bold text-gray-500 flex-col">
                        <p>Tienes un código ?</p>
                        <input
                           type="text"
                           value={memberCode}
                           onChange={(e) => setMemberCode(e.target.value)}
                           onKeyUp={async (e) => {
                              if (e.key == "Enter") {
                                 await handleSubmit();
                              }
                           }}
                           className="px-4 py-1 border-2 border-black rounded-2xl"
                        />
                     </span>
                  </>
               )}
            </div>
         ) : (
            <div className="w-screen flex-1 bg-[url('/SplashBG.png')] bg-cover flex justify-center">
               <div className="flex flex-col items-center w-[90vw] max-w-xl mb-[5rem]">
                  <p className="text-4xl font-bold mt-[5rem] mb-4">
                     GRACIAS POR UNIRTE !
                  </p>
                  <Image
                     className="!relative !aspect-auto !h-full"
                     src="/BienvenidoMembresia.png"
                     fill
                     alt=""
                  />
               </div>
            </div>
         )}
         {/* </div> */}
         <FooterBottom />
      </div>
   );
}

export default Membresia;

import { useAuth } from "@context/authContext";
import FooterBottom from "@shared/footer/footerBottom";
import Navbar from "@shared/navbar";
import Head from "next/head";
import Image from "next/image";
import React, { useState, useEffect, FormEvent } from "react";
import PersonIcon from "@mui/icons-material/Person";
// import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import WithAuth from "@utils/withAuth";
import { useRouter } from "next/router";
import { arrayUnion, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@utils/firebaseConfig";
import ProfileName from "@components/perfil/profileName";
import ProfilePhoto from "@components/perfil/profilePhoto";

function Perfil() {
   const router = useRouter();

   const { profile, currentUser } = useAuth();
   const [profileCategories, setProfileCategories] = useState<string[] | null>(
      null
   );
   const [memberCode, setMemberCode] = useState("");

   const handleSubmit = async (e: FormEvent) => {
      e.preventDefault();

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
            categories: arrayUnion("miembro"),
         },
         { merge: true }
      );
   };
   const buyMembership = async () => {
      const createCheckoutSessionPayload = {
         success_url: "perfil",
         cancel_url: "perfil",
         priceID: process.env.NEXT_PUBLIC_STRIPE_MEMBRESIA,
      };

      const response = await fetch(
         `${process.env.NEXT_PUBLIC_MY_DOMAIN}/api/create-checkout-session`,
         {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
               Accept: "application/json",
            },
            body: JSON.stringify(createCheckoutSessionPayload),
         }
      );
      const session = await response.json();

      await setDoc(
         doc(db, "users", currentUser.email),
         {
            pendingMember: true,
            lastCheckoutSessionId: session.id,
         },
         { merge: true }
      );

      if (!session?.url) return;
      router.push(session.url);
   };

   useEffect(() => {
      setProfileCategories(profile?.categories);
   }, [profile]);

   return (
      <WithAuth>
         <div className="flex flex-col min-h-[100vh] items-center overflow-hidden">
            <Head>
               <title>Perfil</title>
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
            {currentUser && (
               <>
                  <div className="w-full h-[7rem] bg-gradient-to-br from-yellow to-amber-400 relative flex mb-[4rem] shadow-md">
                     <div className="sm:ml-10 mx-auto flex mt-[3.5rem] drop-shadow-lg">
                        <ProfilePhoto />
                     </div>
                  </div>
                  <div className="flex flex-col w-[90vw] flex-1 ">
                     <h2 className="pb-2 text-2xl font-bold border-b-2 border-b-gray-400/25">
                        Perfil
                     </h2>
                     <div className="sm:w-[80%] max-w-xl flex flex-col gap-3 py-3">
                        <span className="flex justify-between">
                           <p>Email:</p>
                           <p>{currentUser.email}</p>
                        </span>
                        <ProfileName />
                     </div>
                     <div className="mb-12">
                        <h2 className="pb-2 text-2xl font-bold border-b-2 border-b-gray-400/25">
                           Categorias
                        </h2>

                        {profileCategories?.map((category: any) => (
                           <p key={category} className="mt-2 capitalize">
                              {category}
                           </p>
                        ))}
                     </div>
                  </div>
                  {!profileCategories && !profile?.pendingMember && (
                     <div className="flex flex-col w-[90vw] mt-2">
                        <p className="text-lg font-medium">
                           Tienes un código de miembro?
                        </p>
                        <form
                           onSubmit={handleSubmit}
                           className="flex my-2 w-fit"
                        >
                           <input
                              type="text"
                              name="memberCode"
                              placeholder="Código de miembro"
                              value={memberCode}
                              onChange={(e) => setMemberCode(e.target.value)}
                              className="border-b-2 border-yellow"
                           />
                           <button className="px-8 py-2 rounded-sm bg-yellow drop-shadow">
                              Submit
                           </button>
                        </form>
                        <span className="mb-10">
                           O compra tu membresia
                           <button
                              onClick={buyMembership}
                              className="ml-1 text-blue-400 underline"
                           >
                              aquí
                           </button>
                        </span>
                     </div>
                  )}
                  <FooterBottom />
               </>
            )}
         </div>
      </WithAuth>
   );
}

export default Perfil;

import React, { FormEvent, useEffect, useState } from "react";
import { useAuth } from "@/context/authContext";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import {
   isSignInWithEmailLink,
   signInWithEmailLink,
   updateProfile,
} from "firebase/auth";
import { auth, db } from "@/integrations/firebase/firebaseConfig";
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

const isCodeValid = async (code: string) => {
   const codeRef = doc(db, "member_codes", code);

   const codeSnapshot = await getDoc(codeRef);

   if (!codeSnapshot.exists()) return false;

   const codeHasBeenRedeemed = codeSnapshot.data().redeemed;

   if (codeHasBeenRedeemed) return false;

   return true;
};

const markCodeAsRedeemed = async (code: string, email: string) => {
   const codeRef = doc(db, "member_codes", code);

   await updateDoc(codeRef, {
      redeemed: true,
      redeemerEmail: email,
   });
};

function Register() {
   const router = useRouter();
   const [inputName, setInputName] = useState("");
   const [email, setEmail] = useState("");
   const [inputMemberCode, setInputMemberCode] = useState("");
   const [error, setError] = useState("");
   const { currentUser, registerUserWithEmailLink, profile } = useAuth();
   const [routerQuerySrc, setRouterQuerySrc] = useState("");

   useEffect(() => {
      const signTheUserIn = async () => {
         const saved_email = window.localStorage.getItem("emailForSignIn");
         if (
            isSignInWithEmailLink(auth, window.location.href) &&
            !!saved_email
         ) {
            let url = window.location.href;

            try {
               await signInWithEmailLink(auth, saved_email, url);
               window.localStorage.removeItem("emailForSignIn");
            } catch (error) {}
         }
      };
      signTheUserIn();
   }, []);

   useEffect(() => {
      const { src, name, memberCode } = router.query;
      if (typeof src === "string") {
         setRouterQuerySrc(`&src=${encodeURIComponent(src)}`);
      }

      if (!currentUser) return;

      const setProfileInfo = async () => {
         if (profile) return;
         if (typeof name === "string") {
            await updateProfile(currentUser, { displayName: name });
         }
         const member_code =
            typeof memberCode === "string" ? memberCode : inputMemberCode;
         if (!member_code || member_code === "") return;

         let codeIsValid = await isCodeValid(member_code);

         if (!codeIsValid) return;

         await setDoc(
            doc(db, "users", currentUser.email),
            {
               categories: arrayUnion("miembro"),
            },
            { merge: true }
         );

         await markCodeAsRedeemed(member_code, currentUser.email);
      };
      setProfileInfo();

      router.replace(typeof src === "string" ? src : "/");
   }, [router, currentUser, profile, inputMemberCode]);

   const registerUser = async (e: FormEvent) => {
      e.preventDefault();

      let url = window.location.href;
      url = inputName ? url + `&name=${inputName}` : url;
      url = inputMemberCode ? url + `&memberCode=${inputMemberCode}` : url;

      await router.replace(url);

      let signInError = (await registerUserWithEmailLink(email, url)) as string;

      if (signInError) {
         console.log(signInError);
         signInError = signInError.split(":")[1];
         setError(signInError);
         return;
      }
   };

   return (
      <div className="w-full pt-4">
         <div className="flex flex-col items-center w-full ">
            <div
               className={`${
                  error === "" ? "hidden" : "flex"
               } w-[90%] bg-[#ffc0c0]  justify-center`}
            >
               <p className="p-1 text-sm text-black">{error}</p>
            </div>
            <h1 className="mb-4 text-3xl font-bold">Registrate</h1>

            <form
               onSubmit={registerUser}
               className="flex flex-col items-center w-full"
            >
               <div className="authInputBox">
                  <input
                     type="text"
                     name="name"
                     required
                     value={inputName}
                     onChange={(e) => setInputName(e.target.value)}
                  />
                  <label htmlFor="name">Nombre Completo:</label>
               </div>
               <div className="authInputBox">
                  <input
                     type="text"
                     name="email"
                     required
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="email">Correo:</label>
               </div>
               <p className="text-[.8rem] w-[90%] pb-1">
                  Tienes un codigo de membresia? (opcional)
               </p>
               <div className="authInputBox">
                  <input
                     type="text"
                     name="memberCode"
                     value={inputMemberCode}
                     onChange={(e) => setInputMemberCode(e.target.value)}
                  />
                  <label htmlFor="memberCode">Codigo:</label>
               </div>

               <div className="w-[90%] flex flex-col items-center mx-auto">
                  <button
                     type="submit"
                     className="w-full p-2 mt-2 text-white bg-blue-500 rounded hover:scale-[1.005]"
                  >
                     Enviar
                  </button>
               </div>
            </form>
         </div>
         <div className="flex gap-1 p-4 text-sm">
            <p>¿Tienes una cuenta?</p>
            <Link
               href={`/auth/ingresa?state=login${routerQuerySrc}`}
               className="text-blue-400 underline"
            >
               Inicia sesion
            </Link>
         </div>
      </div>
   );
}

export default Register;

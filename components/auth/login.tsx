import { useAuth } from "@context/authContext";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FormEvent, useEffect, useState } from "react";

function Login() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState("");
   const { signInWithEmail, currentUser } = useAuth();
   const [routerQuerySrc, setRouterQuerySrc] = useState("");

   const router = useRouter();

   useEffect(() => {
      const { src } = router.query;
      if (typeof src === "string") {
         setRouterQuerySrc(`&src=${encodeURIComponent(src)}`);
      }

      if (!currentUser) return;
      router.replace((src as string) || "/");
   }, [router, currentUser]);

   const registerUser = async (e: FormEvent) => {
      e.preventDefault();

      let signInError = await signInWithEmail(email, password);

      if (signInError) {
         signInError = signInError.split(":")[1].split("(")[0];
         setError(signInError);
         console.log(signInError);
         return;
      }

      setEmail("");
      setPassword("");
   };
   return (
      <div className="w-full pt-2 mt-4 rounded-lg">
         <div className="flex flex-col items-center w-full ">
            <div
               className={`${
                  error === "" ? "hidden" : "flex"
               } w-[90%] bg-[#ffc0c0]  justify-center`}
            >
               <p className="p-1 text-sm text-black">{error}</p>
            </div>
            <h1 className="mb-4 text-3xl font-bold">Iniciar sesion</h1>

            <form
               onSubmit={registerUser}
               className="flex flex-col items-start w-full"
            >
               <div className="authInputBox">
                  <input
                     type="email"
                     name="email"
                     required
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="email">Correo:</label>
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
            <p>¿No tienes una cuenta?</p>
            <Link
               href={`/auth/ingresa?state=register${routerQuerySrc}`}
               className="text-blue-400 underline"
            >
               Registrate aquí
            </Link>
         </div>
      </div>
   );
}

export default Login;

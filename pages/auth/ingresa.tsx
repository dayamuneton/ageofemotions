import ContinueWith from "@/components/auth/continueWith";
import Login from "@/components/auth/login";
import Register from "@/components/auth/register";
import { useAuth } from "@/context/authContext";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

function Ingresa() {
   const router = useRouter();
   const [showLogin, setShowLogin] = useState(true);
   const { currentUser } = useAuth();
   useEffect(() => {
      const { state } = router.query;

      setShowLogin(state === "login");
   }, [router]);

   return (
      <div className="min-h-[80vh] justify-center bg-lightGray flex flex-col items-center ">
         <Head>
            <title>Ingresa</title>
            <meta name="description" content="Generated by create next app" />
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <div className="max-w-[90vw] w-[20rem]">
            {showLogin ? <Login /> : <Register />}

            <ContinueWith />
         </div>
      </div>
   );
}

export default Ingresa;

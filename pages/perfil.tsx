import { useAuth } from "@/context/authContext";
import FooterBottom from "@/shared/footer/footerBottom";
import Navbar from "@/shared/navbar";
import Head from "next/head";
import React from "react";
import WithAuth from "@/utils/withAuth";
import ProfileName from "@/components/perfil/profileName";
import ProfilePhoto from "@/components/perfil/profilePhoto";
import Link from "next/link";

function Perfil() {
   const { profile, currentUser } = useAuth();

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
                  <div className="relative flex justify-center flex-1 w-full gap-3 py-4 shadow-md bg-gradient-to-br from-yellow to-amber-400">
                     <div className="flex flex-col lg:flex-row w-[90vw] max-w-5xl gap-3 items-center lg:items-start">
                        <div className="w-full p-10 bg-white rounded-md lg:w-fit drop-shadow-md h-fit">
                           <ProfilePhoto />
                        </div>
                        <div className="flex flex-col flex-1 w-full px-6 py-10 bg-white rounded-md sm:px-10 drop-shadow-md h-fit">
                           <h2 className="w-full pb-2 text-2xl font-bold border-b-2 border-b-gray-400/25">
                              Perfil
                           </h2>
                           <div className="sm:w-[80%]  flex flex-col gap-3 py-3">
                              <span className="flex justify-between">
                                 <p className="mr-12">Email:</p>
                                 <p className="text-sm whitespace-nowrap">
                                    {currentUser.email}
                                 </p>
                              </span>
                              <ProfileName />
                           </div>
                           <div className="mb-12">
                              <h2 className="pb-2 text-2xl font-bold border-b-2 border-b-gray-400/25">
                                 Categorias
                              </h2>

                              {profile?.isMember && (
                                 <p className="mt-2 capitalize">miembro</p>
                              )}
                           </div>

                           {!profile?.isMember && (
                              <div className="flex flex-col items-center w-full py-12 text-center">
                                 <Link
                                    href="/membresia"
                                    className="px-12 py-4 mb-4 text-xl font-medium text-white bg-black"
                                 >
                                    QUIERO SER MIEMBRO
                                 </Link>
                                 <div className="max-w-[90vw] w-fit bg-yellow">
                                    Obtén acceso al contenido exclusivo para
                                    miembros desde
                                    <p className="inline ml-1 text-white bg-black w-fit h-fit">
                                       $3.00
                                    </p>
                                 </div>
                              </div>
                           )}
                        </div>
                     </div>
                  </div>
                  <FooterBottom />
               </>
            )}
         </div>
      </WithAuth>
   );
}

export default Perfil;

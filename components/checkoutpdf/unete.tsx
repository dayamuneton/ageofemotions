import { useAuth } from "@context/authContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Unete() {
   const { profile } = useAuth();
   if (profile?.categories?.includes("miembro")) return <></>;

   return (
      <div className="flex flex-col items-center w-full py-12 text-center">
         <Link
            href="/membresia"
            className="px-12 py-4 mb-4 text-xl font-medium text-white bg-black"
         >
            QUIERO SER MIEMBRO
         </Link>
         <div className="max-w-[90vw] w-fit bg-yellow">
            Obtén acceso al contenido exclusivo para miembros desde
            <p className="inline ml-1 text-white bg-black w-fit h-fit">$3.00</p>
         </div>
      </div>
   );
}

export default Unete;

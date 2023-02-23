import { useAuth } from "@context/authContext";
import Image from "next/image";
import React from "react";

function Unete() {
   const { profile } = useAuth();
   if (profile?.categories?.includes("miembro")) return <></>;

   return (
      <div className="flex flex-col items-center w-full py-12 text-center">
         <Image
            src="/LogoAgeOfEmotions.png"
            alt=""
            fill
            className="!relative flex max-w-[10rem] w-[90vw] rounded-full"
         />
         <p className="text-orange rotate-[-10deg]  w-[10em] text-2xl font-cutive flex my-8">
            Sabemos que en ocasiones la vida es difícil
         </p>
         <p className="text-xl w-[20em] max-w-[95vw]">
            Queremos contribuir con el bienestar emocional de nuestros clientes.
         </p>
         <p className="w-[25em] leading-4 mt-10 max-w-[90vw]">
            ES HORA QUE ENRIQUEZCAS TU EXPERIENCIA DE VIDA, CONOCIENDO TUS
            EMOCIONES
         </p>
         <p className=" bg-cyan-100">
            A través del arte, la ciencia y la tecnología
         </p>
         <p className="text-2xl max-w-[12em] font-bold my-8">
            Únete a la comunidad AGE OF EMOTIONS
         </p>
         <div className="max-w-[90vw] w-fit bg-yellow">
            Obtén acceso al contenido exclusivo para miembros desde
            <p className="inline ml-1 text-white bg-black w-fit h-fit">$3.00</p>
         </div>
      </div>
   );
}

export default Unete;

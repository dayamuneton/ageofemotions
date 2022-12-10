import { useRouter } from "next/router";
import React from "react";

function SignUpButton() {
   const router = useRouter();

   const updatePath = () => {
      router.replace("/signup", undefined, {
         shallow: true,
      });
   };

   return (
      <button
         onClick={updatePath}
         className=" p-4 px-12 bg-[#ff6161] rounded-[.6rem] text-sm font-semibold"
      >
         INSCRIBIRME
      </button>
   );
}

export default SignUpButton;

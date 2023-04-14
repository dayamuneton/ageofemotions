import { useAuth } from "@/context/authContext";
import { auth, db } from "@/integrations/firebase/firebaseConfig";
import useClickOutside from "@/utils/useClickOutside";
import { doc, getDoc } from "firebase/firestore";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState, useRef } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { updateProfile } from "firebase/auth";

function NavbarProfile() {
   const { currentUser, logout, profile } = useAuth();
   const [showUserDropdown, setShowUserDropdown] = useState(false);
   const router = useRouter();

   const toggleUserDropdown = () =>
      setShowUserDropdown((showUserDropdown) => !showUserDropdown);

   const redirectToAuth = () => {
      if (currentUser) return;

      const url = `/auth/ingresa?src=${encodeURIComponent(router.asPath)}`;

      router.replace(url);
   };

   const profileRef = useRef<HTMLDivElement>(null);
   useClickOutside(profileRef, () => {
      setShowUserDropdown(false);
   });

   return (
      <div
         ref={profileRef}
         onClick={redirectToAuth}
         className="relative flex items-center mx-1"
      >
         <PersonIcon
            onClick={toggleUserDropdown}
            className="cursor-pointer hover:drop-shadow-lg"
         />
         {showUserDropdown && currentUser && (
            <div className="absolute bg-white rounded drop-shadow-lg top-[1.5rem] right-0 text-sm p-2 z-[99999]">
               <div>
                  <p className="text-base font-medium">{currentUser?.email}</p>
                  <div className="flex flex-col font-thin">
                     {profile?.isMember && <p>miembro</p>}
                  </div>
               </div>
               <div className="flex flex-col pt-2 mt-2 text-blue-700 border-t-2">
                  <Link href={`/perfil`}>Perfil</Link>

                  <button onClick={logout} className="text-start">
                     Cerrar Sesion
                  </button>
               </div>
            </div>
         )}
      </div>
   );
}

export default NavbarProfile;

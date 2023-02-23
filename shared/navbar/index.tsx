import { useRouter } from "next/router";
import React, { useRef, useState, useEffect } from "react";
import NavItem from "./navItem";
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import useClickOutside from "@utils/useClickOutside";
// import { useAuth } from "@context/authContext";
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "@utils/firebaseConfig";
import UserDropdown from "./profile";
import { useAuth } from "@context/authContext";
import NavbarProfile from "./profile";

const navbarItems = [
   {
      href: "/",
      text: "Regalo",
      alias: ["/gift"],
   },
   {
      href: "/parte1",
      text: "Programa",
      alias: ["/signup"],
   },
   {
      href: "/camiseta",
      text: "Camiseta",
      alias: [],
   },
   {
      href: "/membresia",
      text: "Membresía",
      alias: [],
   },
   {
      href: "/coherentemente",
      text: "CoherenteMENTE",
      alias: [],
   },
   {
      href: "/creativamente",
      text: "CreativaMENTE",
      alias: [],
   },
   {
      href: "/tecnologicamente",
      text: "TecnológicaMENTE",
      alias: [],
   },
   // {
   //    href: "/giftcard",
   //    text: "Gift-Card",
   //    alias: [],
   // },
   // {
   //    href: "/redeem",
   //    text: "Redimir",
   //    alias: [],
   // },
];

function Navbar() {
   const router = useRouter();
   const [showSidebar, setShowSidebar] = useState(false);

   const toggleSidebar = () => setShowSidebar((showSidebar) => !showSidebar);

   const navUlRef = useRef<HTMLDivElement>(null);
   useClickOutside(navUlRef, () => {
      setShowSidebar(false);
   });

   return (
      <nav className="w-full">
         <div className="fixed z-[99999] right-0 max-w-[95vw] w-fit flex justify-end items-center text-[2rem] p-3 text-[#555]">
            <NavbarProfile />
            <span
               onClick={toggleSidebar}
               className="cursor-pointer hover:drop-shadow-lg"
            >
               {showSidebar ? <MdClose /> : <HiMenu />}
            </span>
         </div>

         <div
            ref={navUlRef}
            className={`navUl ${
               showSidebar ? "left-0" : "left-[-100%]"
            } text-xl pt-4  `}
         >
            {navbarItems.map(({ href, text, alias }: any) => (
               <NavItem
                  key={href}
                  href={href}
                  text={text}
                  asPath={router.asPath}
                  alias={alias}
               />
            ))}
         </div>
      </nav>
   );
}

export default Navbar;

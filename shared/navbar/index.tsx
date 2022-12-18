import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import NavItem from "./navItem";
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import useClickOutside from "@utils/useClickOutside";

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
      href: "/giftcard",
      text: "Gift-Card",
      alias: [],
   },
   {
      href: "/redeem",
      text: "Redimir",
      alias: [],
   },
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
         <div
            className="fixed z-50 right-0 w-fit flex justify-end text-[2rem] p-3 text-[#555]"
            onClick={toggleSidebar}
         >
            {showSidebar ? <MdClose /> : <HiMenu />}
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

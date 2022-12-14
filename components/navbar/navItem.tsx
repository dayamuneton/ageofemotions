import Link from "next/link";
import React from "react";

interface NavItemProps {
   href: string;
   text: string;
   asPath: string;
   alias: string[];
}

function NavItem({ href, text, asPath, alias }: NavItemProps) {
   let match = asPath === href;
   for (let i = 0; i < alias.length; i++) {
      if (asPath === alias[i]) {
         match = true;
      }
   }
   const textColor = match ? "text-lightBlue" : "text-gray-600";
   return (
      <span className="flex justify-center w-[70%] md:w-fit p-2 mx-auto border-b-2 md:border-b-0 md:mx-0">
         <Link
            className={`${textColor} mx-[5rem]  hover:drop-shadow `}
            href={href || "/"}
         >
            {text}
         </Link>
      </span>
   );
}

export default NavItem;

import Link from "next/link";
import React from "react";

interface NavItemProps {
  href: string;
  text: string;
  asPath: string;
}

function NavItem({ href, text, asPath }: NavItemProps) {
  //   const textColor = asPath === href ? "text-[#fe6061]" : "";
  const textColor = asPath === href ? "text-[#76e2f1]" : "";
  return (
    <span className="flex justify-center w-[70%] md:w-fit p-2 mx-auto border-b-2 md:border-b-0 md:mx-0">
      <Link
        className={`${textColor} mx-[5rem] drop-shadow-sm`}
        href={href || "/"}
      >
        {text}
      </Link>
    </span>
  );
}

export default NavItem;

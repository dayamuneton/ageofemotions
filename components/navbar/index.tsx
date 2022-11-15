import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import NavItem from "./navItem";
import { HiMenu } from "react-icons/hi";
import CloseIcon from "@mui/icons-material/Close";
import { MdClose } from "react-icons/md";
import useClickOutside from "../shared/useClickOutside";

const navbarItems = [
  {
    href: "/",
    text: "Regalo",
    alias: ["/gift"],
  },
  {
    href: "/parte1",
    text: "Programa",
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
        className="fixed md:hidden z-50 w-full flex justify-end text-[2rem] p-3"
        onClick={toggleSidebar}
      >
        {showSidebar ? <MdClose /> : <HiMenu />}
      </div>

      <div
        ref={navUlRef}
        className={`navUl ${
          showSidebar ? "left-0" : "left-[-100%]"
        } md:relative md:h-fit md:bg-[#faf8f5] md:left-0 md:w-full md:flex-row text-xl pt-4 md:py-4 md:justify-center `}
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

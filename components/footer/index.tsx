import React from "react";
import FooterBottom from "./footerBottom";
import Center from "./center";
import Top from "./top";

function Footer() {
   return (
      <div className="flex flex-col items-center w-full">
         {/* <Top></Top> */}
         <Center></Center>
         <FooterBottom></FooterBottom>
      </div>
   );
}

export default Footer;

import React from "react";
import { FaFacebookF } from "react-icons/fa";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

function Bottom() {
  return (
    <div className="flex flex-col items-center gap-2 p-4 pb-8 text-sm text-white bg-black border-t-2 border-white">
      <span className="text-[0.7rem]">
        Daya Muneton © Todos los derechos reservados. Política de privacidad |
        Política de cookies | Términos de uso
      </span>
      <span>Do Not Sell My Personal Information</span>
      <span>E-Mail: info@dayamuneton.co</span>
      <span>
        <FacebookIcon />
        <YouTubeIcon />
        <InstagramIcon />
      </span>
    </div>
  );
}

export default Bottom;

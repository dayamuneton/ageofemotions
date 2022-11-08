import React from "react";
import { FaFacebookF } from "react-icons/fa";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";

function FooterBottom() {
  return (
    <div className="flex flex-col items-center gap-2 p-4 pb-8 text-sm text-white bg-black border-t-2 border-white">
      <span className="text-[0.7rem] flex gap-1">
        <p>Daya Muneton © Todos los derechos reservados.</p>
        <Link href="/politica-de-privacidad" target="_blank">
          Política de privacidad
        </Link>
        |
        <Link href="/politica-de-cookies" target="_blank">
          Política de cookies
        </Link>
        |
        <Link href="/terminos-y-condiciones" target="_blank">
          Términos de uso
        </Link>
      </span>
      {/* <span>Do Not Sell My Personal Information</span> */}
      <span>
        E-Mail:&nbsp;
        <a href="mailto:info@amayliberate.com" target="_blank" rel="noreferrer">
          info@amayliberate.com
        </a>
      </span>
      <span>
        <Link href="https://www.facebook.com/dayamuneton" target="_blank">
          <FacebookIcon />
        </Link>
        <Link
          href="https://www.youtube.com/channel/UCcwzib11TVK-eQVbwgDfN5g/featuredj"
          target="_blank"
        >
          <YouTubeIcon />
        </Link>
        <Link href="https://www.instagram.com/dayamuneton/" target="_blank">
          <InstagramIcon />
        </Link>
      </span>
    </div>
  );
}

export default FooterBottom;

import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

function Form() {
  return (
    <div className="bg-[#faf8f5] flex flex-col items-center p-8">
      <span className="flex mb-10 text-3xl font-bold font-play-fair">
        Recibe tu
        <p className=" bg-[#e5f10d] pr-2">&nbsp;Regalo</p>
      </span>
      <form className="bg-[#fdfdf9] p-8 w-[min(95%,40rem)]">
        <div className="flex flex-col gap-8 sm:gap-0 sm:flex-row">
          <span className="inputBox">
            <label className="absolute top-[-1.5rem]" htmlFor="name">
              Nombre
            </label>
            <input className="inputs" type="text" name="name" />
          </span>

          <span className="inputBox">
            <label className="absolute top-[-1.5rem]" htmlFor="lastname">
              Apellido
            </label>
            <input className="inputs" type="text" name="lastname" />
          </span>

          <span className="inputBox">
            <label
              className="absolute top-[-1.5rem]"
              htmlFor="email"
              aria-required
            >
              Email
            </label>
            <input className="inputs" type="email" name="email" />
          </span>
        </div>

        <div className="flex flex-col items-center justify-between gap-2 mt-4 md:flex-row">
          <span>
            <input type="checkbox" name="terms" id="" />
            <label htmlFor="terms" className="px-2 text-sm">
              Acepto los términos y condiciones
            </label>
          </span>

          <button className="p-2 px-8 text-white bg-black">
            Quiero mi regalo
          </button>
        </div>
      </form>

      <span className="text-[.75rem] flex flex-col items-center">
        {/* <p> */}
        <span className="flex gap-1">
          <p>Daya Muneton © All rights reserved.</p>
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
        {/* </p> */}
        {/* <p>Do Not Sell My Personal Information</p> */}
        <span className="flex items-center justify-between p-2 mt-4 text-white bg-black w-fit">
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
      </span>
    </div>
  );
}

export default Form;

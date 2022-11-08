import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

function Form() {
  return (
    <div className="bg-[#faf8f5] flex flex-col items-center p-8">
      <h2 className="mb-10">Recibe tu regalo</h2>
      <form className="bg-[#fdfdf9] p-8">
        <div className="flex">
          <span className="relative">
            <label className="absolute top-[-1.5rem]" htmlFor="name">
              Name
            </label>
            <input className="inputs" type="text" name="name" />
          </span>

          <span className="relative">
            <label className="absolute top-[-1.5rem]" htmlFor="lastname">
              Last Name
            </label>
            <input className="inputs" type="text" name="lastname" />
          </span>

          <span className="relative">
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

        <div className="flex justify-between mt-4">
          <span>
            <input type="checkbox" name="terms" id="" />
            <label htmlFor="terms">I accept the terms and conditions</label>
          </span>

          <button className="p-2 px-8 text-white bg-black">
            {" "}
            I want my gift
          </button>
        </div>
      </form>

      <span className="text-[.75rem] flex flex-col items-center">
        <p>
          Daya Muneton © All rights reserved. Privacy Policy I Política de
          cookies I Términos de uso
        </p>
        <p>Do Not Sell My Personal Information</p>
        <span className="flex items-center justify-between p-2 mt-4 text-white bg-black w-fit">
          <FacebookIcon />
          <YouTubeIcon />
          <InstagramIcon />
        </span>
      </span>
    </div>
  );
}

export default Form;

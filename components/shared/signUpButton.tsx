import { useRouter } from "next/router";
import React from "react";

function SignUpButton() {
  const router = useRouter();

  const redirectToCheckout = async () => {
    const response = await fetch("/api/create-checkout-session");
    const data = await response.json();
    const url = data.url;

    console.log(data.id);
    console.log(data.url);

    if (typeof url === "string") {
      // router.push(url);
      window.open(url, "_blank");
    }
  };
  return (
    <div className="flex flex-col items-center p-8 border-[3px] border-black rounded-xl">
      <p className="text-sm leading-4">
        Inscríbete con el email en <br />
        donde recibirás el programa.
      </p>

      <button
        onClick={redirectToCheckout}
        className="mt-2 mb-4 p-4 px-12 bg-[#ff6161] rounded-[.6rem] text-sm font-semibold"
      >
        INSCRIBIRME
      </button>
    </div>
  );
}

export default SignUpButton;

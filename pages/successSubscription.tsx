import { useRouter } from "next/router";
import React from "react";

function SuccessSubscription() {
  const router = useRouter();
  const redirectToHome = async () => {
    router.push("/");
  };
  return (
    <div>
      <p>Checkea tu email</p>
      <button
        onClick={redirectToHome}
        className="p-4 px-12 bg-[#ff6161] rounded-[.6rem] text-sm font-semibold"
      >
        Home
      </button>
    </div>
  );
}

export default SuccessSubscription;

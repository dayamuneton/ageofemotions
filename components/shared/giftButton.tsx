import { useRouter } from "next/router";
import React from "react";

function GiftButton() {
  const router = useRouter();

  const updatePath = () => {
    router.replace("/gift", undefined, {
      shallow: true,
    });
  };

  return (
    <button
      className="p-4 px-12 bg-[#ff6161] rounded-[.6rem] text-sm font-semibold"
      onClick={updatePath}
    >
      QUIERO MI REGALO, CLICK AQUÍ
    </button>
  );
}

export default GiftButton;

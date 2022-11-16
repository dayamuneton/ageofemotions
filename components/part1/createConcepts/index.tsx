import Image from "next/image";
import React from "react";
import SouthIcon from "@mui/icons-material/South";

function CreateConcept() {
  return (
    <div className="flex justify-center w-full pt-8 ">
      <div className="w-[50ch] flex flex-col items-center font-light ">
        <span className="flex aspect-[4/3] relative h-[15rem]">
          <Image src="/DayaMunetonEdited.png" alt="" fill />
        </span>
        <p className="bg-[#77e2f0] font-bold text-lg p-4">
          Crear conceptos de ti, sin percibirlos en tu cuerpo te atrapa en un
          ciclo vicioso, donde necesitas cada vez más nuevos conocimientos para
          poder ver resultados.
        </p>
        <p className="my-6 text-center">
          Como puedes dar el primer paso? Explorando nuevas formas de
          percibirte.
        </p>
        <p className="">Mira como</p>
        <SouthIcon className="text-[#fe6061] my-8 text-[2.5rem]" />
      </div>
    </div>
  );
}

export default CreateConcept;

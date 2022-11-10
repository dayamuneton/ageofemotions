import React from "react";
import SouthIcon from "@mui/icons-material/South";
import Image from "next/image";

function LetMeGuess() {
  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-3xl font-bold">Déjame adivinar...</h2>
      {/* <div> */}
      <div className=" flex flex-col items-center w-[90vw] md:max-w-[45ch]">
        <p className="mx-6 my-4">
          Aprendiste en cursos y retiros, hábitos sanos contigo que te han
          funcionado, pero como no conoces tu cuerpo, entonces por alguna razón
          todo es confuso y no puedes aplicar todo lo que has aprendido. Y lo
          que es peor... Después de un tiempo todo se desvanece y vuelves a
          sentir ese vacío y desmotivación.
        </p>
        <p className=" font-bold text-center bg-[#76e3f0] text-[#ff6061] px-8 py-4">
          SE TRATA DE AMAR Y LIBERARTE DE TODO LO QUE TE ESTÁ LIMITANDO. EN
          LUGAR DE ESO SIENTES QUE NO PUEDES AMAR PORQUE TE VAN A LASTIMAR.
        </p>
        <span className="relative flex aspect-square h-[5rem] my-8">
          <Image src="/BlackAndWhiteHeart.png" alt="" fill />
        </span>
      </div>
      {/* </div> */}
      <div className="max-w-[70ch] px-8 flex-col flex items-center font-light">
        <h2 className="text-2xl font-bold">
          Te parece justo que estes trabajando tan duro en ti y no veas
          resultados consistentes?
        </h2>
        <p className="my-4 font-light">
          No tener percepcion corporal tus emociones ha hecho que no apliques
          estrategias de crecimiento personal medibles, escalables y te ha
          llevado a estados de incertidumbre, miedo y estancamiento. <br />
          Como puedes dar el primer paso? Explorando nuevas formas de
          percibirte.
        </p>
        <p>Mira como</p>
        <span className="my-12">
          <SouthIcon className="text-[#ff6160] text-[3rem]" />
        </span>
        {/* <span className="text-[#ff6160] text-[3rem] py-8">
          <SouthIcon />
        </span> */}
      </div>
    </div>
  );
}

export default LetMeGuess;

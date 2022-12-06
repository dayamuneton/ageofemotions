import SignUpButton from "../../shared/signUpButton";

function TextPartOne() {
  return (
    <div className="mx-4 lg:mx-0 border-4 border-[#ecfe05] px-12 py-6 flex flex-col items-center lg:w-[30vw] bg-transparent my-4 z-[150]">
      <h2 className="text-4xl font-light font-roboto-slab rotate-[-10deg] my-4">
        Parte 1
      </h2>
      <p className="py-4 text-2xl font-bold border-b-4 font-play-fair">
        ​ 3 Hábitos Para Ganar Percepción Corporal De Tus Emociones.
      </p>
      <p className="my-4 text-sm font-semibold">
        No percibir tu cuerpo como parte de tu consciencia, te ha llevado a
        tener muchas confusiones, dolor y estancamiento en varios aspectos de tu
        vida.
      </p>
      <SignUpButton />
      {/* <div className="flex flex-col items-center p-8 border-[3px] border-black rounded-xl">
        <p className="text-sm leading-4">
          Inscríbete con el email en <br /> donde recibirás el programa.
        </p>

        <button className="mt-2 mb-4 p-4 px-12 bg-[#ff6161] rounded-[.6rem] text-sm font-semibold">

            INSCRIBIRME

        </button>
      </div> */}
    </div>
  );
}

export default TextPartOne;

import SignUpButton from "@shared/signUpButton";

function TextPartOne() {
   return (
      <div className="mx-4 max-w-[95vw] lg:mx-0 border-4 border-[#ecfe05] py-6 px-12  bg-transparent my-4 z-[1500]">
         <div className="flex flex-col items-center mx-auto lg:w-[16rem]">
            <h2 className="text-4xl font-belsey rotate-[-10deg] my-4">
               Parte 1
            </h2>
            <p className="py-4 text-xl font-bold border-b-4 font-play-fair">
               ​ 10 Prácticas Para Ganar Percepción Corporal De Tus Emociones.
            </p>
            <p className="my-4">
               No percibir tu cuerpo como parte de tu consciencia, te ha llevado
               a tener muchas confusiones, dolor y estancamiento en varios
               aspectos de tu vida.
            </p>
            <SignUpButton />
         </div>
      </div>
   );
}

export default TextPartOne;

import React from "react";
import { HiArrowLongDown } from "react-icons/hi2";

function Description() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center max-w-[min(40rem,80%)]">
        <span className="text-3xl mb-4  mt-[4rem] font-play-fair font-bold">
          El conocimiento sobre la relación cuerpo y emociones es libertad,
          claridad y enfoque.
        </span>
        <span className="bg-[#76e2f1] text-[#fe6161] p-4 text-[.8rem] font-bold mb-10">
          SIP! Lo leíste bien, todo lo relacionado con la percepción corporal de
          las emociones , tiene que ver con lograr tus metas. ​ ​
        </span>
        <span className="flex flex-col items-center text-sm text-[#777]">
          El arte te ayudará a visualizar y comprender como te percibes a ti
          mismo y descubrir porque haber excluido tu cuerpo como parte de tu
          consciencia te ha llevado confusión, sufrimiento y estancamiento en
          varios aspectos de tu vida. <br /> ​ En este programa usarás el arte
          para explorar otras formas de percibirte y te dará libertad de elegir
          como quieres vivir. ​<br /> ​ Como puedes dar el primer paso? Comienza
          por comprender como te percibes ​<p>Recibe tu regalo aquí</p>
          <span className="my-12">
            <HiArrowLongDown className="text-red-500 text-[3rem]" />
          </span>
        </span>
      </div>
    </div>
  );
}

export default Description;

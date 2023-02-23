import Image from "next/image";
import Link from "next/link";
import React from "react";

interface StructureCardProps {
   product: {
      title: string;
      photoURL: string;
      description: string;
      subTitle?: string;
      buttonText?: string;
      link: string;
      price?: string;
      prices?: {
         priceID?: string;
      }[];
      imgAspectRatio: string;
   };
}

function StructureCard({ product }: StructureCardProps) {
   const link = product.prices
      ? `checkoutpdf/${product.link}?psrc=coherentemente`
      : product.link;

   return (
      <div className="flex flex-col lg:flex-row items-center border-[3px] rounded-[1.5rem] border-yellow max-w-[90vw] w-[80ch] px-12 p-8 bg-white m-4">
         <div className="flex flex-col items-center w-[50%]">
            <Image
               src={product.photoURL}
               priority
               alt=""
               fill
               className="!relative flex max-w-[8rem] border-[8px] rounded-lg border-black"
            />

            <p className="mt-2 text-xl font-bold text-center text-orange">
               {product.price}
            </p>
            <p className="text-xl font-bold text-center ">PDF</p>
         </div>
         <div className="flex flex-col w-full py-8 lg:pl-8">
            <h2 className="text-3xl font-bold text-center">{product.title}</h2>
            <p className="text-xl font-bold text-center font-play-fair">
               {product.subTitle}
            </p>
            <p className="my-6 font-medium">{product.description}</p>
            <Link
               href={`/${link}`}
               className="p-4 px-8 mx-auto text-sm font-semibold rounded-lg bg-orange sm:w-[20rem] text-center"
            >
               {product.buttonText || "Comprar ahora"}
            </Link>
         </div>
      </div>
   );
}

export default StructureCard;

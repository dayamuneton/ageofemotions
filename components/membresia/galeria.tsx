import { ProductInterface } from "@components/checkoutpdf/checkoutForm";
import { useAuth } from "@context/authContext";
import { db } from "@utils/firebaseConfig";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import MemebresiaProductCard from "./card";

const galeriaProducts: ProductInterface[] = [
   {
      title: "La paz es una práctica",
      photoURL: "/galeria/PazEsUnaPractica.png",
      prices: [
         {
            priceID: "price_1MctNRJXe1xPNvbnKZN5y3Mt",
         },
         {
            priceIDForMembers: "price_1McXjJJXe1xPNvbnAU2lWdVD",
         },
      ],
      description:
         "Profundiza tu autoconocimiento entendiendo otro significado de la paz",
      link: "paz-es-una-practica",
      mailerlite_group: "80386999454794887",
   },
   {
      title: "Que es el amor",
      photoURL: "/galeria/QueEsELAmor.png",
      prices: [
         {
            priceID: "price_1MctMSJXe1xPNvbnTM3LBwJo",
         },
         {
            priceIDForMembers: "price_1McXvgJXe1xPNvbnQ0D8nBHi",
         },
      ],
      description:
         "Una visión sobre ti mismo, cuando NO tienes en cuenta tu cuerpo, su lenguaje y sus manías.Es cuando creas un concepto mental, muy primitivo de lo que es el amor.",
      link: "que-es-el-amor",
      mailerlite_group: "80387100876211720",
   },
   {
      title: "3 Razones por las que eres posesivo",
      photoURL:
         "https://firebasestorage.googleapis.com/v0/b/amayliberate.appspot.com/o/images%2FQueEsElAmor.png?alt=media&token=e471cd5d-7d1e-4722-ac9e-79629771acef",
      prices: [
         {
            priceID: "price_1MctMfJXe1xPNvbnQLtnop08",
         },
         {
            priceIDForMembers: "price_1McXr5JXe1xPNvbnb9bAcMP3",
         },
      ],
      description:
         "Explora las visiones del amor que te han conducido a tener miedo de perder.",
      link: "3-razones-por-las-que-eres-posesivo",
      mailerlite_group: "80387050800415961",
   },
   {
      title: "Conoce tu cuerpo",
      photoURL: "/galeria/ConoceTuCuerpo.png",
      prices: [
         {
            priceID: "price_1MctO6JXe1xPNvbnZlLM0Qj4",
         },
         {
            priceIDForMembers: "price_1McXfRJXe1xPNvbnuWJPQiIl",
         },
      ],
      description:
         "Nos comunicamos según como nos percibimos. Comienza por entender como te percibes y de esa forma entenderás como otras personas se perciben, lograrás derrotar la barrera de la comunicación.",
      link: "conoce-tu-cuerpo",
      mailerlite_group: "80386645688321377",
   },
   {
      title: "5 actitudes de los líderes",
      photoURL: "/galeria/5ActitudesDeLosLideres.png",
      prices: [
         {
            priceID: "price_1MctM8JXe1xPNvbn28K5TseF",
         },
         {
            priceIDForMembers: "price_1McY0PJXe1xPNvbnkrzGNyOA",
         },
      ],
      description:
         "Este es un conocimiento super poderoso porque si realmente quieres gestionar tus emociones en forma activa, percibir en tu cuerpo las emociones te conducirá hacia un avance escalonado y lograrás resultados con coherencia.",
      link: "5-actitudes-de-los-lideres",
      mailerlite_group: "80387142974441068",
   },
   {
      title: "Tu cuerpo es un artista",
      photoURL: "/galeria/TuCuerpoEsUnArtista.png",
      prices: [
         {
            priceID: "price_1Mcr5hJXe1xPNvbnWvyasaYK",
         },
         {
            priceIDForMembers: "price_1McY7qJXe1xPNvbnOTuw9Gov",
         },
      ],
      description:
         "Cuando ignoramos nuestro poder de creación cada instante de nuestras vidas probablemente nos especializamos en lo que no queremos para nosotros mismo.",
      link: "tu-cuerpo-es-un-artista",
      mailerlite_group: "80387169272727512",
   },
];

function Galeria() {
   // const [galeriaProducts, setGaleriaProducts] = useState<
   //    ProductInterface[] | null
   // >(null);

   // useEffect(() => {
   //    const getProducts = async () => {
   //       const products = (await (
   //          await getDocs(collection(db, "pdf_products"))
   //       ).docs.map((doc) => doc.data())) as ProductInterface[];
   //       setGaleriaProducts(products);
   //    };
   //    getProducts();
   // }, []);

   // const uploadProducts = async () => {
   //    for (const product of galeriaProducts) {
   //       const docRef = await doc(db, "pdf_products", product.link);
   //       await setDoc(docRef, product);
   //    }
   // };

   return (
      <div className="flex flex-col items-center w-full my-8">
         <div className="grid grid-cols-2 lg:grid-cols-5 w-[90vw] max-w-6xl">
            {galeriaProducts?.map((product: ProductInterface) => (
               <MemebresiaProductCard
                  key={product.photoURL}
                  product={product}
               />
            ))}
         </div>
      </div>
   );
}

export default Galeria;

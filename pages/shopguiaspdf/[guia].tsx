import FooterBottom from "@/shared/footer/footerBottom";
import Navbar from "@/shared/navbar";
import { db } from "@/integrations/firebase/firebaseConfig";
import { doc, DocumentData, getDoc } from "firebase/firestore";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";

function Guia() {
   const router = useRouter();
   const [guiaPDF, setGuiaPDF] = useState<DocumentData>();
   const getGuiaPDF = useCallback(async () => {
      const { guia } = router.query;
      if (!guia || typeof guia !== "string") return;

      const pdfDoc = doc(db, "pdf_products", guia);

      const pdfDocSnap = await getDoc(pdfDoc);

      if (!pdfDocSnap.exists()) {
         console.log("No such document!");
         router.push("/shopguiaspdf");
         return;
      }

      setGuiaPDF(pdfDocSnap.data());
   }, [router]);

   useEffect(() => {
      getGuiaPDF();
   }, [getGuiaPDF]);

   if (!guiaPDF) return <></>;

   return (
      <div className="flex flex-col items-center w-full  bg-[#fafafa]">
         <Head>
            <title>{guiaPDF.title}</title>
            <meta name="description" content={guiaPDF.description} />
            <meta
               name="keywords"
               content="Arte, Ciencia, Tecnología, Amor, Liberate, Regalo"
            />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Navbar />
         <h1>{guiaPDF.title}</h1>
         <span className=" h-[50vh] ">
            <Image
               src={guiaPDF.photoURL}
               alt=""
               fill
               className="!relative h-full w-auto"
            />
         </span>
         <div>
            <p>{guiaPDF.description}</p>
         </div>
         <button className="p-2 text-center border-2 border-black bg-yellow">
            Agregar al carrito de compras
         </button>
         <FooterBottom />
      </div>
   );
}

export default Guia;

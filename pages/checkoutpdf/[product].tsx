import FooterBottom from "@/shared/footer/footerBottom";
import Navbar from "@/shared/navbar";
import Head from "next/head";
import React from "react";
import Faq from "@/components/checkoutpdf/faq";
import CheckoutForm from "@/components/checkoutpdf/checkoutForm";
import Unete from "@/components/checkoutpdf/unete";
import { getGaleria } from "@/integrations/firebase/galeria";
import { Product } from "@/models/productModel";
import ProductInfo from "@/components/checkoutpdf/productInfo";

// export const getStaticPaths = async () => {
//    const { galeria } = await getGaleria();
//    const paths = galeria.map((product: Product) => ({
//       params: { product: product.id },
//    }));
//    return {
//       paths,
//       fallback: false,
//    };
// };
// export const getStaticProps = async ({
//    params,
// }: {
//    params: { product: string };
// }) => {
//    const { galeria } = await getGaleria();
//    const product = galeria.find(
//       (product: Product) => product.id === params.product
//    );
//    return {
//       props: { product: JSON.stringify(product) },
//    };
// };

function CheckoutPDF() {
   return (
      <div className="flex flex-col items-center w-full  bg-[#fafafa]">
         <Head>
            <title>Checkout PDF</title>
            <meta
               name="description"
               content="En medio de una crisis mundial de salud mental este programa Ama y Libérate, te ayuda a liberarte de la confusión, dolor y el miedo ganando percepción corporal de tus emociones por medio del arte."
            />
            <meta
               name="keywords"
               content="Arte, Ciencia, Tecnología, Amor, Liberate, Regalo"
            />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Navbar />
         <h2 className="mt-8 text-3xl font-bold text-center font-play-fair">
            <p>Escribe el email donde quieres</p>
            <p>recibir el PDF </p>
         </h2>
         <p className="mb-4">Available only in spanish</p>
         {/* <ProductInfo product={product} /> */}
         <CheckoutForm />
         <Unete />
         <Faq />
         <FooterBottom />
      </div>
   );
}

export default CheckoutPDF;

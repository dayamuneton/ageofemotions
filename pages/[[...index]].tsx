import About from "@/shared/about";
import Footer from "@/shared/footer";
import GiftForYou from "@/shared/giftforyou";
import Navbar from "@/shared/navbar";
import GiftButton from "@/shared/giftButton";
import Head from "next/head";
import BadPractices from "@/shared/badPractices";
import WorldHasEvolved from "@/components/home/worldHasEvolved";
import DivergentThinking from "@/components/home/divergentThinking";
import ServicesCards from "@/components/home/servicesCards";
import Form from "@/components/home/giftForm";
import Content from "@/components/home/content";

export default function Home() {
   return (
      <div className="flex flex-col items-center overflow-hidden">
         <Head>
            <title>Tu Regalo</title>
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
         <GiftForYou />
         <div className="bg-[#faf8f5] w-full flex- flex-col items-center flex pb-4">
            <WorldHasEvolved />
            <DivergentThinking />

            <div className="my-14">
               <h2 className="mb-2 text-5xl font-semibold">Crezcamos juntos</h2>
               <p className="ml-16 text-xl text-orange font-cutive">
                  De la mano con nuestra comunidad.
               </p>
            </div>
            <ServicesCards />
         </div>
         <BadPractices />
         <Form />
         <div className="flex flex-col items-center w-full p-8 pb-20 bg-white text-bold">
            <Content />
            <GiftButton />
            <br />
            <About />
         </div>
         <Footer />
      </div>
   );
}

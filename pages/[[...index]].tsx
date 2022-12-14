import About from "@components/about";
import Footer from "@components/footer";
import ArtIsTheNewWay from "@components/home/artIsTheNewWay";
import Content from "@components/home/content";
import Description from "@components/home/description";
import Form from "@components/home/form";
import GiftForYou from "@components/home/giftforyou";
import LeopardGlassesGirl from "@components/home/leopardGlassesGirl";
import Logo from "@components/home/logo";
import Navbar from "@components/navbar";
import GiftButton from "@components/shared/giftButton";
import Head from "next/head";

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

         <Logo />

         <GiftForYou />

         <Description />

         <Form />

         <div className="flex flex-col items-center w-full p-8 pb-20 text-bold bg-gradient-to-b from-blueGray to-rose">
            <Content />
            <GiftButton />
            <br />
            <About />
         </div>

         <LeopardGlassesGirl />
         <ArtIsTheNewWay />
         <Footer />
      </div>
   );
}

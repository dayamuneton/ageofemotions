import Head from "next/head";
import About from "../components/about";
import Content from "../components/home/content";
import Description from "../components/home/description";
import Footer from "../components/footer";
import Form from "../components/home/form";
import GiftForYou from "../components/home/giftforyou";
import Navbar from "../components/navbar";
import GiftButton from "../components/shared/giftButton";
import LeopardGlassesGirl from "../components/home/leopardGlassesGirl";
import ArtIsTheNewWay from "../components/home/artIsTheNewWay";
import Logo from "../components/home/logo";

export default function Home() {
  return (
    <div className="flex flex-col items-center overflow-hidden">
      <Head>
        <title>Tu Regalo</title>
        <meta name="description" content="Tu regalo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Logo />

      <GiftForYou />

      <Description></Description>

      <Form />

      <div className="text-bold bg-gradient-to-b from-[#bdc9d9] to-[#f2e2f6] p-8 pb-20 flex flex-col items-center w-full">
        <Content />
        <GiftButton />
        <br />
        <About />
      </div>

      <LeopardGlassesGirl />
      <ArtIsTheNewWay />
      <Footer></Footer>
    </div>
  );
}

import Head from "next/head";
import Image from "next/image";
import About from "../components/about";
import Content from "../components/content";
import Description from "../components/description";
import Footer from "../components/footer";
import Form from "../components/form";
import GiftForYou from "../components/giftforyou";
import GiftButton from "../components/shared/giftButton";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="flex justify-center overflow-hidden">
      <Head>
        <title>Tu Regalo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col w-full">
        <div className="bg-[#faf8f5] flex justify-center p-8 ">
          Ama Y Liberate P1
        </div>

        <div className="flex justify-center bg-[#fafbfb] p-8">
          <span className="relative flex aspect-square w-[5rem]">
            <Image src="/AmaYLiberateLogo.png" alt="" fill />
          </span>
        </div>

        <GiftForYou />
        <Description></Description>
        <Form></Form>

        <div className="text-bold bg-gradient-to-b from-[#bdc9d9] to-[#f2e2f6] p-8 pb-[7rem] flex flex-col items-center">
          <Content />
          <GiftButton />
          <br />
          <About></About>
        </div>

        <span className="w-full overflow-hidden ">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/leopard-glassesGirl.jpg"
            alt=""
            className="object-cover w-[100vw] h-[70vh] object-[center,40%]"
          />
        </span>
        <span className="bg-[#faf8f5] flex justify-center text-[1.5rem] font-semibold p-8">
          <p>
            <span className="inline-flex">
              El Arte Es La
              <span className="bg-[#e4f10c] mx-2 flex w-fit">Nueva</span>
            </span>
            Forma
            <br /> De Ganar Consciencia
            <br /> De la Percepción Corporal De <br />
            las Emociones.
          </p>
        </span>
        <Footer></Footer>
      </div>
    </div>
  );
}

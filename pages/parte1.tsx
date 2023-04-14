import Head from "next/head";
import React from "react";
import About from "@/components/about";
import CreateConcept from "@/components/part1/createConcepts";
import Footer from "@/components/footer";
import ItsForYouIf from "@/components/part1/itsforyouif/itsForYouIf";
import Navbar from "@/components/navbar";
import PartOne from "@/components/part1/banner";
import WhatWillYouGet from "@/components/part1/whatWillYouGet";
import Top from "@/components/footer/top";
import IsItFair from "@/components/part1/isItFair";
import NoLongerPracticedAsBefore from "@/components/part1/noLongerPracticed";
import ExpensiveTransformation from "@/components/part1/expensiveTransformation";
import SeriousProblem from "@/components/part1/seriousProblem";
import SignUpForm from "@/components/part1/partoneForm";
import PersonalizedMentoring from "@/components/part1/personalizedMentoring";

function GiftPart1() {
   return (
      <div className="flex flex-col items-center w-full overflow-hidden">
         <Head>
            <title>Parte 1</title>
            <meta
               name="description"
               content="En medio de una crisis mundial de salud mental este programa Ama y Libérate, te ayuda a liberarte de la confusión, dolor y el miedo ganando percepción corporal de tus emociones por medio del arte."
            />
            <meta
               name="keywords"
               content="Amor, Libertad, Ciencia Tecnología, Arte"
            />
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <Navbar />

         <h1 className="w-full bg-[#f0f0f0] font-bold text-6xl text-center py-8">
            AGE OF EMOTIONS
         </h1>

         <PartOne />

         <IsItFair />

         <NoLongerPracticedAsBefore />

         <ExpensiveTransformation />

         <SeriousProblem />

         <CreateConcept />

         {/* <ArtIsTheNewWay /> */}

         <div className="flex flex-col items-center w-full bg-[#fafafa]">
            <WhatWillYouGet />
            <SignUpForm />
            <PersonalizedMentoring />
         </div>

         <ItsForYouIf />

         <div className="flex flex-col items-center w-full p-8 pb-20 text-bold bg-gradient-to-b from-blueGray to-rose">
            <About />
         </div>

         <Top />
         <Footer />
      </div>
   );
}

export default GiftPart1;

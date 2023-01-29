import Head from "next/head";
import React from "react";
import About from "@shared/about";
import ArtIsTheNewWay from "@components/part1/artIsTheNewWay";
import CreateConcept from "@components/part1/createConcepts";
import ExpensiveTransformation from "@components/part1/expensiveTransformation";
import Footer from "@shared/footer";
import IsItFair from "@components/part1/IsItFair";
import ItsForYouIf from "@components/part1/itsforyouif";
import Navbar from "@shared/navbar";
import NoLongerPracticedAsBefore from "@components/part1/NoLongerPracticedAsBefore";
import PartOne from "@components/part1/partone";
import SeriousProblem from "@components/part1/seriousProblem";
import WhatWillYouGet from "@components/part1/whatWillYouGet";
import SignUpForm from "@components/part1/signupForm";
import PersonalizedMentoring from "@components/part1/personalizedMentoring";

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

         <PartOne />

         <IsItFair />

         <NoLongerPracticedAsBefore />

         <ExpensiveTransformation />

         <SeriousProblem />

         <CreateConcept />

         {/* <ArtIsTheNewWay /> */}

         <div className="bg-[#fafbfb] flex flex-col items-center w-full">
            <WhatWillYouGet />
            <SignUpForm />
            <PersonalizedMentoring />
         </div>

         <ItsForYouIf />

         <div className="flex flex-col items-center w-full p-8 pb-20 text-bold bg-gradient-to-b from-blueGray to-rose">
            <About />
         </div>

         <Footer />
      </div>
   );
}

export default GiftPart1;

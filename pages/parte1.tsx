import Head from "next/head";
import React from "react";
import About from "../components/about";
import ArtIsTheNewWay from "../components/part1/artIsTheNewWay";
import CreateConcept from "../components/part1/createConcepts";
import ExpensiveTransformation from "../components/part1/expensiveTransformation";
import Footer from "../components/footer";
import IsItFair from "../components/part1/IsItFair";
import ItsForYouIf from "../components/part1/itsforyouif";
import Navbar from "../components/navbar";
import NoLongerPracticedAsBefore from "../components/part1/NoLongerPracticedAsBefore";
import PartOne from "../components/part1/partone";
import SeriousProblem from "../components/part1/seriousProblem";
import WhatWillYouGet from "../components/part1/whatWillYouGet";
import PersonalizedMentoring from "../components/part1/whatWillYouGet/personalizedMentoring";
import SignUpForm from "../components/part1/signupForm";

function GiftPart1() {
   return (
      <div className="flex flex-col items-center w-full overflow-hidden">
         <Head>
            <title>Ama Y Liberate</title>
            <meta name="description" content="Ama y liberate" />
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <Navbar />

         <PartOne />

         <IsItFair />

         <NoLongerPracticedAsBefore />

         <ExpensiveTransformation />

         <SeriousProblem />

         <CreateConcept />

         <ArtIsTheNewWay />

         <div className="bg-[#fafbfb] flex flex-col items-center w-full">
            <WhatWillYouGet />
            <SignUpForm />
            <PersonalizedMentoring />
         </div>

         <ItsForYouIf />

         <div className="text-bold bg-gradient-to-b from-[#bdc9d9] to-[#f2e2f6] p-8 pb-20 flex flex-col items-center w-full">
            <About />
         </div>

         <Footer />
      </div>
   );
}

export default GiftPart1;

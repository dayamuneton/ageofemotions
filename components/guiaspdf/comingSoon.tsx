import { db } from "@utils/firebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import ComingSoonCard from "./comingSoonCard";

interface ComingSoonProductInterface {
   link: string;
   photoURL: string;
   title: string;
}

function ComingSoon() {
   const [comingSoonPDFS, setComingSoonPDFS] = useState<any>([]);

   useEffect(() => {
      const comingSoonRef = collection(db, "pdf_coming_soon");
      const unSubscribe = onSnapshot(comingSoonRef, (snapshot) => {
         const docs: any = [];
         snapshot.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id });
         });

         setComingSoonPDFS(docs);
      });

      return unSubscribe;
   }, []);

   return (
      <div className="flex flex-col items-center w-full my-8">
         <div className="flex flex-col items-center w-full p-2 my-4 bg-yellow">
            <p className="text-2xl font-bold">
               COMING SOON! <br />
            </p>
         </div>
         <div className="grid grid-cols-2 lg:grid-cols-5 w-[90vw] max-w-6xl">
            {comingSoonPDFS?.map((product: ComingSoonProductInterface) => (
               <ComingSoonCard key={product.photoURL} product={product} />
            ))}
         </div>
      </div>
   );
}

export default ComingSoon;

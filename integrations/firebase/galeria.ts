import { productConverter } from "@/models/productModel";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const getGaleria = async () => {
   const galeriaRef = collection(db, "pdf_products").withConverter(
      productConverter
   );
   const commingSoonRef = collection(db, "pdf_coming_soon").withConverter(
      productConverter
   );

   const galeriaQuery = query(
      galeriaRef,
      where("category", "!=", "coherentemente")
   );

   const galeriaSnapshot = await getDocs(galeriaQuery);
   const commingSoonSnapshot = await getDocs(commingSoonRef);

   const galeria = galeriaSnapshot.docs.map((doc) => doc.data() || null);
   const commingSoon = commingSoonSnapshot.docs.map(
      (doc) => doc.data() || null
   );

   return { galeria, commingSoon };
};

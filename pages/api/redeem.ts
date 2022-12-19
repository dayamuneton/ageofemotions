import { db } from "@utils/firebaseConfig";
import { subscribeToPartOne } from "@utils/mailerliteSubscribeToPartOne";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";

const isGiftCardCodeValid = async (code: string) => {
   const codeRef = doc(db, "giftcardcodes", code);

   const codeSnapshot = await getDoc(codeRef);

   if (!codeSnapshot.exists()) return false;

   const codeHasBeenRedeemed = codeSnapshot.data().redeemed;

   if (codeHasBeenRedeemed) return false;

   return true;
};

const markGiftCardCodeAsRedeemed = async (code: string, email: string) => {
   const codeRef = doc(db, "giftcardcodes", code);

   await updateDoc(codeRef, {
      redeemed: true,
      redeemerEmail: email,
   });
};

const RedeemGiftCard = async (req: NextApiRequest, res: NextApiResponse) => {
   if (req.method !== "POST") {
      res.status(405).send("Method Not Allowed");
   }

   const { fullName, email, code } = req.body;

   let codeIsValid = await isGiftCardCodeValid(code);

   if (!codeIsValid) return;

   await subscribeToPartOne(email, fullName);

   await markGiftCardCodeAsRedeemed(code, email);

   console.log(`log, Redeemer ${email}, code ${code}`);

   res.status(200).send("OK");
};
export default RedeemGiftCard;

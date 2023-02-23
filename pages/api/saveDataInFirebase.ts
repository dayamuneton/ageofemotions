import { doc, FieldValue, setDoc } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@utils/firebaseConfig";
import { reportInitializeCheckoutEvent } from "@pixelEvents/events";

interface UserData {
   name?: string;
   email: string;
   lastCheckoutSessionId: string;
   giftCardCodes?: FieldValue;
   getGiftCard?: boolean;
   mailerlite_group?: string;
}

const saveDataInFirebase = async (
   req: NextApiRequest,
   res: NextApiResponse
) => {
   if (req.method !== "POST") {
      res.status(405).send("Method Not Allowed");
   }

   const {
      firstName,
      lastName,
      email,
      getGiftCard,
      priceID,
      cancel_url,
      mailerlite_group,
      success_url,
   } = req.body;

   const createCheckoutSessionPayload = {
      success_url: success_url || "gracias",
      cancel_url,
      priceID,
   };

   const response = await fetch(
      `${process.env.NEXT_PUBLIC_MY_DOMAIN}/api/create-checkout-session`,
      {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
         },
         body: JSON.stringify(createCheckoutSessionPayload),
      }
   );
   const session = await response.json();

   const lastCheckoutSessionId = session.id;

   let data: UserData = {
      email,
      lastCheckoutSessionId,
      mailerlite_group,
      getGiftCard: getGiftCard || false,
   };

   const name = `${firstName} ${lastName}`;
   if (name.split(" ")[0] !== "undefined") {
      data = { ...data, name };
   }

   const userRef = doc(db, "users", email);
   try {
      await setDoc(userRef, data, {
         merge: true,
      });
      await reportInitializeCheckoutEvent(`/${cancel_url}`, email);

      res.status(200).json(session);
   } catch (e) {
      let error = new Error("Error " + e);
      res.status(500).send(error);
      throw error;
   }
};
export default saveDataInFirebase;

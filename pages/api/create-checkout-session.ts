import { doc, setDoc } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { db } from "@utils/firebaseConfig";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
   apiVersion: "2022-11-15",
});

const createCheckoutSession = async (
   req: NextApiRequest,
   res: NextApiResponse
) => {
   const session = await stripe.checkout.sessions.create({
      mode: "payment",
      success_url: `${process.env.MY_DOMAIN}/gracias`,
      cancel_url: `${process.env.MY_DOMAIN}/parte1`,
      allow_promotion_codes: true,
      payment_method_types: ["card"],
      line_items: [
         {
            price: process.env.STRIPE_10_PRACTICES_PRODUCT,
            quantity: 1,
         },
      ],
   });

   const lastCheckoutSessionId = session.id;
   console.log(lastCheckoutSessionId);

   const { firstName, lastName, email } = req.body;

   console.log(email);

   const data = {
      name: `${firstName} ${lastName}`,
      email,
      lastCheckoutSessionId,
   };

   const userRef = doc(db, "users", email);
   try {
      await setDoc(userRef, data, {
         merge: true,
      });

      res.status(200).json(session);
   } catch (e) {
      let error = new Error("Error " + e);
      res.status(500).send(error);
      throw error;
   }
};
export default createCheckoutSession;

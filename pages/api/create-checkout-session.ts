import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
   apiVersion: "2022-11-15",
});

const createCheckoutSession = async (
   req: NextApiRequest,
   res: NextApiResponse
) => {
   if (req.method !== "POST") {
      res.status(405).send("Method Not Allowed");
   }

   const { success_url, cancel_url } = req.body;

   const session = await stripe.checkout.sessions.create({
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_MY_DOMAIN}/${success_url}`,
      cancel_url: `${process.env.NEXT_PUBLIC_MY_DOMAIN}/${cancel_url}`,
      allow_promotion_codes: true,
      payment_method_types: ["card"],
      line_items: [
         {
            price: process.env.STRIPE_10_PRACTICES_PRODUCT,
            quantity: 1,
         },
      ],
   });

   res.status(200).json(session);
};
export default createCheckoutSession;

import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

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

  res.status(200).json(session);
};
export default createCheckoutSession;

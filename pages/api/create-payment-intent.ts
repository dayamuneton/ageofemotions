import { calculateTotalAmount } from "@/api/payment-intent/totalAmount";
import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "@/api/stripe/stripeConfig";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
   if (req.method !== "POST") {
      res.status(405).send("Method Not Allowed");
   }
   try {
      const { lineItems, coupon } = req.body;

      const totalAmount = await calculateTotalAmount(lineItems, coupon);

      const paymentIntent = await stripe.paymentIntents.create({
         amount: totalAmount,
         currency: "usd",
         automatic_payment_methods: {
            enabled: true,
         },
      });

      res.json(paymentIntent);
   } catch (error) {
      console.log(error);
      res.status(500).send(error);
   }
};
export default handler;

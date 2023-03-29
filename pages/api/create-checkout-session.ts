import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "@/apiUtils/stripe/stripeConfig";

const formatLineItem = (priceID: string) => {
   return {
      price: priceID,
      quantity: 1,
   };
};

const createCheckoutSession = async (
   req: NextApiRequest,
   res: NextApiResponse
) => {
   if (req.method !== "POST") {
      res.status(405).send("Method Not Allowed");
   }

   const { success_url, cancel_url, priceID, lineItems, shopping_cart_id } =
      req.body;

   const line_items: any[] = [];
   if (lineItems) {
      lineItems.forEach((product: any) => {
         line_items.push(formatLineItem(product?.price?.id));
      });
   } else {
      line_items.push(formatLineItem(priceID));
   }

   try {
      const session = await stripe.checkout.sessions.create({
         mode: "payment",
         success_url: `${process.env.NEXT_PUBLIC_MY_DOMAIN}/${success_url}`,
         cancel_url: `${process.env.NEXT_PUBLIC_MY_DOMAIN}/${cancel_url}`,
         allow_promotion_codes: true,
         payment_method_types: ["card"],
         line_items,
         client_reference_id: shopping_cart_id || null,
      });

      res.status(200).json(session);
   } catch (error) {
      console.log(error);
      res.status(500).send(error);
   }
};
export default createCheckoutSession;

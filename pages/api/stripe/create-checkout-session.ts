import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "@/integrations/stripe/stripeConfig";
import { OrderType } from "@/handlers/checkoutSessionCompleted/event";

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

   const { success_url, cancel_url, priceID, lineItems, order_id, metadata } =
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
         client_reference_id: order_id || "no_cart_id",
         metadata: {
            order_type: (metadata?.order_type as OrderType) ?? "guias_pdf",
            customerName: metadata?.customerName?.toLowerCase() ?? "no_name",
            customerEmail: metadata?.customerEmail ?? "no_email",
         },
      });

      res.status(200).json(session);
   } catch (error) {
      console.log(error);
      res.status(500).send(error);
   }
};
export default createCheckoutSession;

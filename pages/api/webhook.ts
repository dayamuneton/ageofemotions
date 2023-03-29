import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "@/apiUtils/stripe/stripeConfig";
import { buffer } from "micro";
import checkoutSessionCompletedEvent from "@/apiUtils/webhook/checkoutSessionCompleted";

const signingSecret = process.env.STRIPE_WEBHOOK_SIGNING_SECRET;

export const config = {
   api: {
      bodyParser: false,
   },
};

const webhook = async (req: NextApiRequest, res: NextApiResponse) => {
   if (req.method !== "POST") return;

   let event;

   const buf = await buffer(req);
   const sig = req.headers["stripe-signature"];

   try {
      if (!sig || !signingSecret) return;
      event = stripe.webhooks.constructEvent(buf, sig, signingSecret);
   } catch (err: any) {
      console.log("error? ", err);

      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
   }

   switch (event.type) {
      case "checkout.session.completed":
         await checkoutSessionCompletedEvent(event.data.object);
         break;

      default:
   }
   res.status(200).send("OK");
};

export default webhook;

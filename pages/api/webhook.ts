import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { buffer } from "micro";
import { subscribeToPartOne } from "@utils/mailerliteSubscribeToPartOne";
import { getFirebaseSubscriberData } from "@utils/getFirebaseSubscriberData";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
   apiVersion: "2022-11-15",
});

const signingSecret = process.env.STRIPE_WEBHOOK_SIGNING_SECRET;

export const config = {
   api: {
      bodyParser: false,
   },
};

interface CheckoutSession extends Stripe.Event.Data.Object {
   customer_details: {
      name: string;
      email: string;
   };
   id: string;
}

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
         const checkoutSession = event.data.object as CheckoutSession;

         const checkoutSessionId = checkoutSession.id;

         let subscriberData = await getFirebaseSubscriberData(
            checkoutSessionId
         );

         if (!subscriberData) {
            subscriberData = checkoutSession.customer_details;
         }

         console.log("log", "subscriberData", subscriberData);

         await subscribeToPartOne(subscriberData.email, subscriberData.name);

         break;

      default:
   }
   res.status(200).send("OK");
};

export default webhook;

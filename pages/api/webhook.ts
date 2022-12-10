import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { buffer } from "micro";
import { subscribeToPartOne } from "../../utils/mailerliteSubscribeToPartOne";
import { getFirebaseSubscriberData } from "../../utils/getFirebaseSubscriberData";

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
   object: {
      id: string;
   };
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

         const checkoutSessionId = checkoutSession.object?.id;

         console.log("log", "id", checkoutSessionId);

         let subscriberData = await getFirebaseSubscriberData(
            checkoutSessionId
         );

         console.log("log", "fir", subscriberData);

         // const { name, email } = subscriberData

         if (!subscriberData) {
            const { name, email } = checkoutSession.customer_details;

            subscriberData = {
               name,
               email,
            };
            console.log("log", subscriberData);
         }

         // subscribeToPartOne(email, name);

         break;

      default:
   }
   res.status(200).send("OK");
};

export default webhook;

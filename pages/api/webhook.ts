import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { buffer } from "micro";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2022-11-15",
});

const signingSecret = process.env.STRIPE_WEBHOOK_SIGNING_SECRET;

const firstLetterUpperCaseEachWord = (words: string) => {
  let result = words.split(" ");

  for (let i = 0; i < result.length; i++) {
    result[i] = result[i].toLowerCase();
    result[i] = result[i].charAt(0).toUpperCase() + result[i].slice(1);
  }

  return result;
};

const subscribeToPartOne = async (email?: string, fullName?: string) => {
  if (!email || !fullName) return;

  const splitName = firstLetterUpperCaseEachWord(fullName);

  const name = splitName[0];

  let lastName = "";

  if (splitName.length > 1) {
    lastName = splitName[splitName.length - 1];
  }

  const payload = {
    email: email,
    fields: {
      name: name,
      last_name: lastName,
    },
    groups: [process.env.NEXT_PUBLIC_MAILERLITE_PART_ONE_GROUP_ID],
  };

  const data = JSON.stringify(payload);

  await fetch(process.env.NEXT_PUBLIC_MAILERLITE_SUBSCRIBERS_API_URL || "", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${
        process.env.NEXT_PUBLIC_MAILERLITE_API_KEY || ""
      }`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: data,
  });
};

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

      const name = checkoutSession.customer_details.name;
      const email = checkoutSession.customer_details.email;

      subscribeToPartOne(email, name);

      break;

    default:
  }
  res.status(200).send("OK");
};

export default webhook;

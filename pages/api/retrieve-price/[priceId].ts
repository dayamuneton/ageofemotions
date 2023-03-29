import { NextApiRequest, NextApiResponse } from "next";
import { retrievePrice } from "@/apiUtils/stripe/retrievePrice";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
   try {
      const { priceId } = req.query;

      if (!priceId) throw new Error("No price ID provided.");
      if (typeof priceId !== "string")
         throw new Error("Price ID is not a string.");
      const price = await retrievePrice(priceId);
      res.json(price);
   } catch (error) {
      console.log(error);
      res.status(500).send(error);
   }
};
export default handler;

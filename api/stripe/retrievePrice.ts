import { stripe } from "./stripeConfig";

export const retrievePrice = async (priceId: string) => {
   try {
      const price = await stripe.prices.retrieve(priceId);
      return price;
   } catch (error) {
      console.error("Error retrieving price: ", error);
      throw new Error("Could not retrieve price.");
   }
};

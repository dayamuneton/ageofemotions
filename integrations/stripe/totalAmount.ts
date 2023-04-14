import Stripe from "stripe";
import { stripe } from "@/integrations/stripe/stripeConfig";
import { applyDiscount, splitPricesByEligibility } from "./promoCode";

const minimumChargeAmountInCents = 50; // $0.50 USD in cents

export const calculateTotalAmount = async (lineItems: any, coupon: any) => {
   const prices: Stripe.Price[] = await Promise.all(
      lineItems.map((item: any) => stripe.prices.retrieve(item.priceID))
   );
   const couponRetrieved = await stripe.coupons.retrieve(coupon);

   const { eligiblePrices, nonEligiblePrices } = splitPricesByEligibility(
      prices,
      couponRetrieved.applies_to?.products
   );

   const totalAmountForElegibleProducts = applyDiscount(
      eligiblePrices,
      couponRetrieved
   );

   const total = totalAmountForElegibleProducts + nonEligiblePrices.subTotal;

   return Math.max(total, minimumChargeAmountInCents);
};

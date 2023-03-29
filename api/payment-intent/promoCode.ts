import Stripe from "stripe";

export interface PriceItems {
   subTotal: number;
   products: Stripe.Price[];
}

export const splitPricesByEligibility = (
   prices: Stripe.Price[],
   eligibleProducts: string[] | undefined
) => {
   const eligiblePrices: PriceItems = { subTotal: 0, products: [] };
   const nonEligiblePrices: PriceItems = { subTotal: 0, products: [] };

   for (const item of prices) {
      const isEligible = eligibleProducts?.includes(item.product as string);
      const subTotal = item.unit_amount || 0;

      if (isEligible) {
         eligiblePrices.products.push(item);
         eligiblePrices.subTotal += subTotal;
      } else {
         nonEligiblePrices.products.push(item);
         nonEligiblePrices.subTotal += subTotal;
      }
   }

   return { eligiblePrices, nonEligiblePrices };
};

export const calculateDiscount = (
   elegibleItems: PriceItems,
   coupon: Stripe.Coupon
) => {
   if (!coupon || !elegibleItems) return 0;

   const { amount_off, percent_off } = coupon;
   const elegibleItemCount = elegibleItems.products.length;
   const elegibleSubTotal = elegibleItems.subTotal;

   const discount =
      amount_off !== null
         ? elegibleItemCount * amount_off
         : (elegibleSubTotal * (percent_off ?? 0)) / 100;

   return discount;
};

export const applyDiscount = (elegibleItems: any, coupon: Stripe.Coupon) => {
   const discount = calculateDiscount(elegibleItems, coupon);
   const totalAmount = elegibleItems.subTotal - discount;
   return totalAmount;
};

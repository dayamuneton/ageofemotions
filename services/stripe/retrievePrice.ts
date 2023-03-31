export const retrievePrice = async (priceId: string) => {
   try {
      const response = await fetch(`/api/stripe/retrieve-price/${priceId}`);
      const price = response.json();
      return price;
   } catch (error) {
      console.error(error);
   }
};

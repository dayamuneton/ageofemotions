const subscribeToGetGiftCard = async (email: string, giftCardCode: string) => {
   if (!email || !giftCardCode) {
      return new Error("Email and Giftcard code are required");
   }

   console.log("log", "data for mailerlite", email);

   const payload = {
      email: email,
      fields: {
         gift_card_code: giftCardCode,
      },
      groups: [process.env.NEXT_PUBLIC_MAILERLITE_GIFTCARD_GROUP_ID],
   };

   const data = JSON.stringify(payload);

   const response = await fetch(
      process.env.NEXT_PUBLIC_MAILERLITE_SUBSCRIBERS_API_URL || "",
      {
         method: "POST",
         headers: {
            Authorization: `Bearer ${
               process.env.NEXT_PUBLIC_MAILERLITE_API_KEY || ""
            }`,
            "Content-Type": "application/json",
            Accept: "application/json",
         },
         body: data,
      }
   );
   const mailerliteResponse = await response.json();

   console.log("log", mailerliteResponse);
};

export default subscribeToGetGiftCard;

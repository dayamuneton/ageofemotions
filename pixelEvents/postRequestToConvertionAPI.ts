const makePostRequestToConvertionsAPI = async (payload: any) => {
   const response = await fetch(
      `https://graph.facebook.com/v15.0/${process.env.CONVERTIONS_API_PIXEL_ID}/events`,
      {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.CONVERTIONS_API_ACCESS_TOKEN}`,
         },
         body: JSON.stringify(payload),
      }
   );
   return await response.json();
};
export default makePostRequestToConvertionsAPI;

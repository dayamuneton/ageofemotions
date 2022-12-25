const apiConvertions = async (reqPayload: any) => {
   await fetch(`/api/convertions`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify({
         reqPayload,
      }),
   });
};
export default apiConvertions;

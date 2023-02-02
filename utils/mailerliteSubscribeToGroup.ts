import { firstLetterUpperCaseEachWord } from "./firstLetterUpperCase";

export const subscribeToGroup = async (
   email: string,
   fullName: string,
   group: string
) => {
   if (!email || !fullName) return;

   console.log("log", "data for mailerlite", email, fullName);

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
      groups: [group],
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

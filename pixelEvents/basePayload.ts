import { generateRandomString } from "@utils/generateUniqueGiftCardCode";
import { NextApiRequest } from "next";

const generateBasePayload = (req: NextApiRequest) => {
   const clientIp =
      req.headers["x-forwarded-for"] || req.connection.remoteAddress;

   const userAgent = req.headers["user-agent"];

   const payload: any = {
      data: [
         {
            action_source: "website",
            event_id: generateRandomString(25),
            event_time: Math.floor(Date.now() / 1000),
            user_data: {},
         },
      ],
   };

   if (clientIp) {
      payload.data[0].user_data.client_ip_address = clientIp;
   }
   if (userAgent) {
      payload.data[0].user_data.client_user_agent = userAgent;
   }
   return payload;
};
export default generateBasePayload;

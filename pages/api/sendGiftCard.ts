import { NextApiRequest, NextApiResponse } from "next";
import { readFile, readFileSync, stat } from "fs";
import nodemailer from "nodemailer";
import { compile } from "handlebars";
import * as path from "path";
import { generateRandomString } from "@utils/generateUniqueGiftCardCode";

const sendGiftCard = async (req: NextApiRequest, res: NextApiResponse) => {
   // const name = req.body.name;

   let filePath = path.join(process.cwd(), "templates/giftcard.handlebars");
   console.log(filePath);

   const fileContents = readFileSync(filePath, "utf-8");

   const template = compile(fileContents);

   const data = {
      name: "Alejandro",
      giftcardcode: generateRandomString(10),
   };

   const html = template(data);

   const transporter = nodemailer.createTransport({
      port: 465,
      host: "mail.privateemail.com",
      secure: true,
      auth: {
         user: process.env.SMTP_TRANSPORT_AUTH_USER,
         pass: process.env.SMTP_TRANSPORT_AUTH_PASS,
      },
   });

   const mailOptions = {
      from: `"Ama & Libérate" <${process.env.SMTP_TRANSPORT_AUTH_USER}>`,
      to: "",
      subject: "Gift Card sent from my server",
      html,
   };

   try {
      // await transporter.sendMail(mailOptions);
      // console.log("Email sent: %s", info);
   } catch (error) {
      console.log(`Error ${error}`);
   }
   res.status(200).send(html);
};

export default sendGiftCard;

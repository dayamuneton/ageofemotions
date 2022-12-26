import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const sendGiftCard = async (req: NextApiRequest, res: NextApiResponse) => {
   const name = req.body.name;

   const transporter = nodemailer.createTransport({
      port: 465,
      host: "mail.privateemail.com",
      secure: true,
      // auth: {
      // user: process.env.SMTP_TRANSPORT_AUTH_USER,
      // pass: process.env.SMTP_TRANSPORT_AUTH_PASS,
      // },
   });

   // const mailOptions = {
   //    from: `"Ama & Libérate" <${process.env.SMTP_TRANSPORT_AUTH_USER}>`,
   //    to: "",
   //    subject: "Gift Card sent from my server",
   //    html: "<p>Hola</p>",
   // };

   try {
      // const info = await transporter.sendMail(mailOptions);
      // console.log("Email sent: %s", info);
   } catch (error) {
      console.log(`Error ${error}`);
   }
   res.status(200).send("OK");
};

export default sendGiftCard;

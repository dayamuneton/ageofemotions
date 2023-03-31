import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
   const { message } = req.body;

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
      from: process.env.SMTP_TRANSPORT_AUTH_USER,
      to: "agredoalejo@gmail.com",
      subject: "New message from your website",
      text: `Message: ${message}`,
   };

   try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully!" });
   } catch (error) {
      res.status(500).json({ message: "Error sending email" });
   }
};

export default handler;

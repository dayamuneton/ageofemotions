import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

function ContactLink({
   href,
   children,
}: {
   href: string;
   children: React.ReactNode;
   textColor?: string;
}) {
   return (
      <Link href={href} target="_blank">
         {children}
      </Link>
   );
}

function ContactLinks({
   color,
   bgColor,
}: {
   color?: string;
   bgColor?: string;
}) {
   return (
      <div
         className="flex gap-2 p-1 mt-2"
         style={{
            color: color,
            backgroundColor: bgColor,
         }}
      >
         {/* <ContactLink href="https://www.facebook.com/dayamuneton">
            <FacebookIcon
               sx={{
                  fontSize: "2rem",
               }}
            />
         </ContactLink>

         <ContactLink href="https://www.youtube.com/channel/UCcwzib11TVK-eQVbwgDfN5g/featuredj">
            <YouTubeIcon
               sx={{
                  fontSize: "2.1rem",
               }}
            />
         </ContactLink> */}
         <ContactLink href="https://www.instagram.com/dayamuneton/">
            <InstagramIcon
               sx={{
                  fontSize: "1.7rem",
               }}
            />
         </ContactLink>
      </div>
   );
}

export default ContactLinks;

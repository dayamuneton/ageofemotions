/* eslint-disable react/no-unescaped-entities */
import React from "react";
import FooterBottom from "../components/footer/footerBottom";

function CookiesPolicy() {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="max-w-[min(90%,60ch)] my-20">
          <h2 className="mb-2 font-bold">
            ¿How do we use cookies and other tracking tools?
          </h2>
          <p className="text-sm">
            How do we use cookies and other tracking tools? Like other
            commercial websites, our website uses a standard technology called
            "cookies" and server logs to collect information about how our site
            is used. Information collected through cookies and server logs may
            include the date and time of visits, pages viewed, time spent on our
            site and websites visited just before and after ours, as well as
            your IP address. . A cookie is a very small text document, which
            often includes an anonymous unique identifier. When you visit a
            website, that site's computer asks your computer for permission to
            store this file in a part of your hard drive designated specifically
            for cookies. Each website can send its own cookie to your browser if
            your browser preferences allow it, but (to protect your privacy)
            your browser only allows a website to access cookies it has already
            sent to you, not those sent to you by others. sites. . The Company
            reserves the right to use technological equivalents of cookies,
            including social media pixels. These pixels allow social networking
            sites to track visitors to external websites in order to personalize
            the advertising messages that users see when they visit that social
            networking website. The Company reserves the right to use these
            pixels in accordance with the policies of the various social media
            sites. Likewise, The Company reserves the option of using "scripts"
            to collect information provided by browsers or by Google Tag
            Manager. Said information may include the user's location, the
            campaign by which the user entered our page, type of search engine,
            as well as others.
          </p>
          <h2 className="my-4 font-bold">Use of Cookies by third parties</h2>
          <p className="text-sm">
            Use of Cookies by third parties. Some content or applications,
            including advertisements, on the Website are served by third
            parties, including advertisers, ad networks and servers, content
            providers and application providers. These third parties may use
            cookies alone or in conjunction with web beacons or other tracking
            technologies to collect information about you when you use our
            website. The information they collect may be associated with your
            personal information or they may collect information, including
            personal information, about your online activities over time and
            across different websites and other online services. They may use
            this information to provide you with interest-based (behavioral)
            advertising or other targeted content. We do not control the
            tracking technologies of these third parties or how they may be
            used. If you have any questions about an advertisement or other
            targeted content, you should contact the responsible provider
            directly. email information If you choose to communicate with us by
            email, we may retain the content of your email messages together
            with your email address and our responses. We provide the same
            protections for these electronic communications that we employ in
            maintaining information received online, by mail, and by telephone.
            This also applies when you register on our website, register through
            any of our forms using your email address, or make a purchase on
            this site. For more information, see the email policy
          </p>
        </div>

        <label className="flex mb-8">
          <input type="checkbox" name="cookies" />
          <p className="pl-2">Acepto las políticas de cookies</p>
        </label>
      </div>
      <FooterBottom />
    </>
  );
}

export default CookiesPolicy;

import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { AuthProvider } from "@/context/authContext";
import { ShopProvider } from "@/context/shopContext";
import { reportPageViewEvent } from "@/integrations/convertions/events";
import { Analytics } from "@vercel/analytics/react";

const App = ({ Component, pageProps }: AppProps) => {
   const router = useRouter();

   useEffect(() => {
      const url = router.asPath;
      if (url === "/[[...index]]") return;

      reportPageViewEvent(url);
   }, [router.asPath]);

   return (
      <>
         <AuthProvider>
            <ShopProvider>
               <Component {...pageProps} />
            </ShopProvider>
         </AuthProvider>
         {process.env.NODE_ENV === "production" && <Analytics />}
      </>
   );
};

export default App;

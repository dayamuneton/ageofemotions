import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { reportPageViewEvent } from "@pixelEvents/events";

const App = ({ Component, pageProps }: AppProps) => {
   const router = useRouter();

   useEffect(() => {
      const url = router.asPath;
      if (url === "/[[...index]]") return;

      reportPageViewEvent(url);
   }, [router.asPath]);

   return <Component {...pageProps} />;
};

export default App;

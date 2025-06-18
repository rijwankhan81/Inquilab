// pages/_app.tsx
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import type { AppProps } from "next/app";
import Head from "next/head";
import "@/styles/globals.scss"; // your global styles
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }: AppProps) {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Set `dir` attribute based on current language
    if (typeof window !== "undefined") {
      const direction = i18n.language === "ar" ? "rtl" : "ltr";
      document.documentElement.setAttribute("dir", direction);
    }
  }, [i18n.language]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp);

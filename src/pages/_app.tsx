import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import Head from "next/head";
import "@fontsource/lexend/latin.css";

import Layout from "components/layout";

import customTheme from "styles/customTheme";
import "styles/globals.css";
import { useRouter } from "next/router"
import Transition from "components/Transition";
import Router from "next/router";
import NProgress from "nprogress";


Router.events.on('routeChangeStart', () => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())


const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()

  return (
    <ChakraProvider theme={customTheme}>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
        />
      </Head>
      <Layout>
        <Transition location={router.pathname}>
          <Component {...pageProps} />
        </Transition>
      </Layout>
    </ChakraProvider>
  );
};

export default MyApp;

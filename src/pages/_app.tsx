import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { AppProps } from "next/app";
import React from "react";
import theme from "@/theme/theme";

import "styles/Fonts.css";
import "styles/App.css";

import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Burn</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <React.StrictMode>
        <Component {...pageProps} />
      </React.StrictMode>
    </ChakraProvider>
  );
}

export default MyApp;

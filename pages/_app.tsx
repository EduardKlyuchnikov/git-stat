import client from "@/apollo/client";
import Header from "@/components/Header";
import theme from "@/theme";
import { ApolloProvider } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider resetCSS theme={theme}>
        <Header />
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  );
}

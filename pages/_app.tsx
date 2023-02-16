import client from "@/apollo/client";
import Header from "@/components/Header";
import theme from "@/theme";
import { ApolloProvider } from "@apollo/client";
import {
  ChakraProvider,
  Modal,
  ModalOverlay,
  Progress,
} from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const start = () => {
      setIsLoading(true);
    };
    const end = () => {
      setIsLoading(false);
    };
    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", end);
    router.events.on("routeChangeError", end);
    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", end);
      router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <>
      <ApolloProvider client={client}>
        <ChakraProvider resetCSS theme={theme}>
          <Progress
            display={!isLoading ? "none" : "block"}
            colorScheme="green"
            size="xs"
            position="absolute"
            left={0}
            right={0}
            top={0}
            isIndeterminate
            background="inherit"
          />
          <Header />
          <Component {...pageProps} />
        </ChakraProvider>
      </ApolloProvider>
    </>
  );
}

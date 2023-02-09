import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  ssrMode: true,
  uri: "https://api.github.com/graphql",
  cache: new InMemoryCache(),
  headers: {
    Authorization: "bearer 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",
  },
});

export default client;

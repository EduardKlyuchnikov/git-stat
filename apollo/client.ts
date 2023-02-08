import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  ssrMode: true,
  uri: "https://beta.pokeapi.co/graphql/v1beta",
  cache: new InMemoryCache(),
});

export default client;

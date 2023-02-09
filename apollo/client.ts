import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  ssrMode: true,
  uri: "https://api.github.com/graphql",
  cache: new InMemoryCache(),
  connectToDevTools:true,
  headers: {
    authorization: `bearer ${process.env.NEXT_PUBLIC_GRAPHCMS_TOKEN}`,
  },
});

export default client;

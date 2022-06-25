import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oyws021g8f01z4giw5aaas/master',
  cache: new InMemoryCache()
})

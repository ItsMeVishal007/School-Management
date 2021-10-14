import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: 'localhost:4000/graphql',
  cache: new InMemoryCache(),
});

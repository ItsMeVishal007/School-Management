import { ApolloServer, gql } from 'apollo-server';

export const typeDefs = gql`
  type Query {
    Client: [Client]
    hello: String
  }

  type Client {
    ClientName: String!
    ClientEmail: String!
    ClientAddress: String!
    ClientPhoneNumber: String!
  }

  type Mutation {
    CreateClient(
      ClientName: String!
      ClientEmail: String!
      ClientAddress: String!
      ClientPhoneNumber: String!
    ): Client!
  }
`;

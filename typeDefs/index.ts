import { ApolloServer, gql } from 'apollo-server';

export const typeDefs = gql`
  type Query {
    Client: [Client]
    hello: String
  }

  type Client {
    ClientName: string!
    ClientEmail: string!
    ClientAddress: string!
    ClientPhoneNumber: string!
  }

  type Mutation {
    CreateClient(
    ClientName: string!
    ClientEmail: string!
    ClientAddress: string!
    ClientPhoneNumber: string!
    ): Client!
  }
`;

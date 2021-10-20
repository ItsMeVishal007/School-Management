import { ApolloServer, gql } from 'apollo-server';
import { DocumentNode } from 'graphql';

export const typeDefs: DocumentNode = gql`
  type Query {
    Client: [Client]
    hello: String
    Projects: [Project]
  }

  type Project {
    ProjectName: String
    ProjectStartDate: String
    ProjectOwner: String
  }

  input project {
    id: ID!
  }

  type Client {
    ClientName: String
    ClientEmail: String
    ClientAddress: String
    ClientPhoneNumber: String
    Projects: [Project]
  }

  type Mutation {
    createClient(
      ClientName: String!
      ClientEmail: String!
      ClientPhoneNumber: String!
      ClientAddress: String!
      Projects: [project]
    ): Client!

    createProject(
      ProjectName: String!
      ProjectStartDate: String!
      ProjectOwner: String
    ): Project
  }
`;

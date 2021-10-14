const { ApolloServer, gql } = require('apollo-server');

export const typeDefs = gql`
  type Query {
    Student: [Student]
    hello: String
  }
  type Student {
    Name: String
    Email: String
    Age: Int
    ContactNumber: Int
    Address: String
    ParentDetails: String
    RollNumber: String
  }

`;

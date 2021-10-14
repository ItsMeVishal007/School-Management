import { ApolloServer, gql } from 'apollo-server';

export const typeDefs = gql`
  type Query {
    Student: [Student]
    hello: String
  }

  type parents {
    FatherName: String
    MotherName: String
    FatherContactNumber: String
  }

  type Student {
    Name: String
    Email: String
    Age: Int
    ContactNumber: String
    ParentDetails: parents
    Address: String
    RollNumber: String
  }

  input parentsDetail {
    FatherName: String
    MotherName: String
    FatherContactNumber: String
  }

  type Mutation {
    CreateStudent(
      Name: String!
      Email: String!
      Age: Int!
      ContactNumber: String!
      ParentDetails: parentsDetail!
      Address: String
      RollNumber: String!
    ): Student!
  }
`;

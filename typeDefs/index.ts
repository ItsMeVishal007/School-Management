const { ApolloServer, gql } = require('apollo-server');
const typeDefs = gql`
type Student{
Name:String
Email:String
Age:Number
ContactNumber:Number
Address:String
ParentDetails:String
RollNumber:String
}
type Query{
Students:[Student]
}
`
module.exports = {typeDefs}
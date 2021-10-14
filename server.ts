import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import express from 'express';
import http from 'http';
import dotenv from 'dotenv';
import { connectDB } from './db/Index';
import { typeDefs } from './typeDefs/index';
import { resolvers } from './resolvers/index';

dotenv.config();
const app: express.Application = express();

app.get('/', (req: any, res: any) => {
  res.json({ message: 'hello world' });
});

async function startApolloServer(typeDefs: any, resolvers: any) {
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],    
  });
  await server.start();
  server.applyMiddleware({ app });
  await new Promise((resolve: any) =>
    httpServer.listen({ port: 4000 }, resolve),
  );
  connectDB(`${process.env.MONGO_URI}`)
    .then(() => {
      console.log(
        `🚀 Server ready at http://localhost:4000${server.graphqlPath}`,
      );
    })
    .catch((err) => console.log(err));
}

startApolloServer(typeDefs, resolvers);

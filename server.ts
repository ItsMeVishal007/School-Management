import express from "express";
import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv';
import { connectDB } from "./db/Index";

dotenv.config();
const app: any = express();

app.get("/", (req: any, res: any) => {
  res.json({ message: "hello world" });
});

connectDB(`${process.env.MONGO_URI}`)
  .then((data) => {
    console.log(data);
    app.listen(4000, (): any => {
      console.log("sever is running at http://localhost:4000");
    });
  })
  .catch((err) => console.log(err));

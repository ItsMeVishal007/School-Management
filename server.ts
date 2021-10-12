import express from "express";
import { connectDB } from "./db/Index";
const app: any = express();

app.get("/", (req: any, res: any) => {
  res.json({ message: "hello world" });
});

connectDB(
  "mongodb+srv://drcyberx:drcyberx@cluster0.yyra3.mongodb.net/MySchool?retryWrites=true&w=majority"
)
  .then((data) => {
    console.log(data);
    app.listen(4000, (): any => {
      console.log("sever is running at http://localhost:4000");
    });
  })
  .catch((err) => console.log(err));

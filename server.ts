import express from "express";

const app: any = express();

app.get("/", (req: any, res: any) => {
  res.json({ message: "hello world" });
});

app.listen(4000, (): any => {
  console.log("Server is up at http://localhost:4000");
});

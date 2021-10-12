import mongoose from "mongoose";

export const connectDB = (uri: string) => {
  return new Promise((resolve: any, reject: any) => {
    mongoose
      .connect(uri)
      .then(() => {
        resolve("connected to DB successfully !");
      })
      .catch(() => {
        reject("connection with DB failed");
      });
  });
};

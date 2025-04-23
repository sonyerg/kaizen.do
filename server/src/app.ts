import "dotenv/config";
import express from "express";

const app = express();

app.get("/", (req, res, next) => {
  res.send("hello world");
  next();
});

export default app;

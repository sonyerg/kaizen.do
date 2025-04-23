import mongoose from "mongoose";

import app from "./app";

const port = process.env.PORT;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to Mongo DB!");
    app.listen(port, () => {
      console.log("Server running on port: " + port);
    });
  })
  .catch(console.error);

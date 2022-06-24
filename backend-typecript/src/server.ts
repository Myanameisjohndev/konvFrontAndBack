import express from "express";

import { connectMongo } from "./db/server.conection";
import { routes } from "./routes";

const app = express();

app.use(express.json());

connectMongo();

app.use(routes);

app.listen(3334, () => {
  console.log("Server is running");
});

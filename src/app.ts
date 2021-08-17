import express, { json, Response } from "express";
import cors from "cors";
import routes from "./routes";

const app = express();

app.use(json());
app.use(
  cors({
    origin: "*",
  })
);
app.use(routes);

export { app };

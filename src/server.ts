import dotenv from "dotenv";
import { Response } from "express";
import { app } from "./app";

dotenv.config();

app.get("/", (_, res: Response) => {
  return res.json({ message: "REST Back-end Challenge 20201209 Running" });
});

const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || "0.0.0.0";
app.listen(PORT, HOST, () => {
  console.log(`Server running on ${HOST}:${PORT}`);
});

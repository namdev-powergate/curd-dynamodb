import express, { Express } from "express";
import dotenv from "dotenv";
import router from "./src/routers";
import { json } from "body-parser";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.use(json());

app.use("/api", router);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

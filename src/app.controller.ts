import express, { Express, type Request, type Response } from "express";
import helmet from "helmet";
import cors from "cors";
import { env } from "./config/config.service.js";
export const bootstrap = async (): Promise<void> => {
  const app: Express = express();

  app.use(helmet());
  app.use(cors());
  app.use(express.json());

  app.get("/", (req:Request, res:Response) => {
    return res.status(200).json({ message: `welcome to ${env.APPLICATION_NAME} app` });
  });

  app.listen(env.PORT,()=>{
console.log(`server is running on http://127.0.0.1:${env.PORT}`)
  })

};

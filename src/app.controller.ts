import express, { Express, type Request, type Response } from "express";
import helmet from "helmet";
import cors from "cors";
import { env } from "./config/config.service.js";
import { corsOptions } from "./Utils/cors/cors.js";
import rateLimit, { type RateLimitRequestHandler } from "express-rate-limit";

// rate limit
const limiter: RateLimitRequestHandler = rateLimit({
  windowMs: 15 * 60 * 1000, //15m,
  limit: 50,
  message: {
    status: 129,
    message: "Too many requests , please try again later",
  },
  standardHeaders: "draft-8",
  legacyHeaders: false,
});

export const bootstrap = async (): Promise<void> => {
  const app: Express = express();

  app.use(helmet(), limiter, cors(corsOptions));
  app.use(express.json());

  app.get("/", (req: Request, res: Response) => {
    return res
      .status(200)
      .json({ message: `welcome to ${env.APPLICATION_NAME} app` });
  });

  app.listen(env.PORT, () => {
    console.log(`server is running on http://127.0.0.1:${env.PORT}`);
  });
};

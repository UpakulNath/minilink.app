import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRouter from "./routes/generatorUser.routes.js";
import { redirectToLongUrl } from "./controllers/url.controllers.js";

const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());


app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);

// routes
app.use("/api/v1/urlUser", authRouter);
app.get("/:shortCode", redirectToLongUrl);

export default app;

import express from "express";
import path from "path";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({ origin: true, credentials: true }));


export default app;

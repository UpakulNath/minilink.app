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

// serve frontend
app.use(express.static(path.join(process.cwd(), "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd(), "public", "index.html"));
});

// test API
app.get("/api/test", (req, res) => {
  res.json({ ok: true });
});

export default app;

import dotenv from "dotenv";
import app from "../src/app.js";
import connectDatabase from "../src/db/index.js";

dotenv.config();
connectDatabase().catch((err) => {
  console.error("Failed to connect DB", err);
});

export default app;

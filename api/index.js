import dotenv from "dotenv";
import app from "../src/app.js";
import connectDatabase from "../src/db/index.js";

dotenv.config();

await connectDatabase();

export default app;

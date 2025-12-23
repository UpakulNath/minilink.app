import app from "../src/app.js";
import connectDatabase from "../src/db/index.js";

connectDatabase().catch((err) => {
  console.error("DB INIT FAILED:", err.message);
});

export default app;

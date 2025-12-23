
import app from "../src/app.js";
import connectDatabase from "../src/db/index.js";


connectDatabase().catch((err) => {
  console.error("Failed to connect DB", err);
});
console.log("MONGO_DB_URI:", process.env.MONGO_DB_URI);

export default app;

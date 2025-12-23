import mongoose from "mongoose";

let isConnected = false;

const connectDatabase = async () => {
  console.log("ENV CHECK MONGO_DB_URI:", process.env.MONGO_DB_URI);

  if (!process.env.MONGO_DB_URI) {
    throw new Error("MONGO_DB_URI is missing at runtime");
  }

  if (isConnected) return;

  await mongoose.connect(process.env.MONGO_DB_URI);
  isConnected = true;
  console.log("MongoDB connected");
};

export default connectDatabase;

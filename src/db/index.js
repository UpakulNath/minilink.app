import mongoose from "mongoose";

let isConnected = false;

const connectDatabase = async () => {
  
  if (!process.env.MONGO_DB_URI) {
    throw new Error("MONGO_DB_URI is missing at runtime");
  }

  if (isConnected) return;

  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error", error);
    throw error;
  }
};

export default connectDatabase;

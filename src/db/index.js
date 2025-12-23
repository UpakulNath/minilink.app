import mongoose from "mongoose";

let isConnected = false;

const connectDatabase = async () => {
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

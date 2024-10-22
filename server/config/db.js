import mongoose from "mongoose";
import "dotenv/config"

const connectDB = async () => {
    try {
        const mongodbUrl = process.env.mongodb;
        await mongoose.connect(mongodbUrl);
        console.log("MongoDB connected");
    } catch (err) {
        console.error("Connection error:", err);
        process.exit(1);
    }
};

export default connectDB;
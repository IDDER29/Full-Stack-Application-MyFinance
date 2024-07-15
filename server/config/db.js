// config/db.js

/*import mongoose from 'mongoose';
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.mongodb, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
*/

import mongoose from "mongoose";
//import dotenv from "dotenv";

//dotenv.config();

// Ensure DB_URL is defined and is a string
/*
if (!process.env.mongodb) {
    throw new Error("Missing environment variable: DB_URL");
}
    */

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://elhoubiyoussef:faghjklq@cluster0.pgmp2gi.mongodb.net/");
        console.log("MongoDB connected");
    } catch (err) {
        console.error("Connection error:", err);
        process.exit(1);
    }
};

export default connectDB;
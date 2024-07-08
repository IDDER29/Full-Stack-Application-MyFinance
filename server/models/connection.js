import mongoose from "mongoose";
import "dotenv/config"

const URL = process.env.mongodb

const conectDB= async ()=>{
    try {
        mongoose.connect(URL)
        console.log("connected to db")
    } catch (error) {
        console.log(error);
    }
}
console.log(conectDB);
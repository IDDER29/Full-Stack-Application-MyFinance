import mongoose from "mongoose";

const { Schema, model } = mongoose

const transactionSchema = new Schema({
    userName: { type: String, required: true },
    name: { type: String, required: true },
    amount: { type: String, required: true },
    Date: { type: Date, required: true }
}, { timestamps: true })

export const transaction = model("Transaction", transactionSchema)
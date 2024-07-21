import mongoose from 'mongoose';
const { Schema, model } = mongoose;

// Define the schema for transaction history items
const transactionHistoryItemSchema = new Schema({
    amount: { type: Number, required: true, min: 0 },
    date: { type: Date, required: true },
    description: { type: String, required: true }
}, { timestamps: true }); // Disable _id for subdocuments

// Define the transaction schema
const transactionSchema = new Schema({
    title: { type: String, required: true },
    category: { type: String, required: true },
    dateOfCreation: { type: Date, required: true },
    lastUpdate: { type: Date, required: true },
    budget: { type: Number, required: true, min: 0 },
    image: { type: String, default: null },
    transactionsHistorique: [transactionHistoryItemSchema] // Array of transaction history items
}, { timestamps: true });

// Create the model from the schema
export const Transaction = model('Transaction', transactionSchema);

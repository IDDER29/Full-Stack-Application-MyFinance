import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const transactionItemSchema = new Schema({
    title: { type: String, required: true },
    category: { type: String, required: true },
    budget: { type: Number, required: true },
    dateCreated: { type: Date, default: Date.now },
    dateUpdated: { type: Date, default: Date.now },
    amountAchieved: { type: Number, default: 0 },
    profileId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true },
}, { timestamps: true });

export const TransactionItem = model('TransactionItem', transactionItemSchema);

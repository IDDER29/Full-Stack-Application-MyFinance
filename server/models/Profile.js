import mongoose from 'mongoose';
const { Schema, model } = mongoose;

// Define the schema for income sources
const incomeSourceSchema = new Schema({
    source: { type: String, required: true },
    amount: { type: Number, required: true, min: 0 }
}); // Disable _id for subdocuments

// Define the profile schema
const profileSchema = new Schema({
    username: { type: String, required: true, unique: true },
    currentTotalIncome: { type: Number, required: true, min: 0 },
    goalAmount: { type: Number, required: true, min: 0 },
    bio: { type: String, default: '' },
    address: { type: String, default: '' },
    phoneNumber: { type: String, default: '' },
    avatar: { type: String, default: '' },
    preferences: {
        currency: { type: String, default: 'USD' },
        language: { type: String, default: 'en' }
    },
    incomeSources: [incomeSourceSchema],
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    transactionItems: [{ type: Schema.Types.ObjectId, ref: 'Transaction' }] // Reference to Transaction model
}, { timestamps: true });

// Create the model from the schema
export const Profile = model('Profile', profileSchema);

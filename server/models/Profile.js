import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const profileSchema = new Schema({
    username: { type: String, required: true },
    income: { type: Number, required: true },
    bio: { type: String },
    address: { type: String },
    phoneNumber: { type: String },
    avatar: { type: String },
    preferences: {
        currency: { type: String, default: 'USD' },
        language: { type: String, default: 'en' },
    },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    transactionItems: [{ type: Schema.Types.ObjectId, ref: 'TransactionItem' }],
}, { timestamps: true });

export const Profile = model('Profile', profileSchema);

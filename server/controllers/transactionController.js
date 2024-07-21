import { validationResult } from 'express-validator';
import { Transaction } from '../models/Transaction.js';
import { Profile } from '../models/Profile.js';

// Helper function for handling validation errors
const handleValidationErrors = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
};

// Helper function for finding a profile by user ID
const findProfileByUserId = async (userId) => {
    return await Profile.findOne({ userId });
};

// Add a new transaction
export const addTransaction = async (req, res) => {
    handleValidationErrors(req, res);

    const { title, category, budget, image } = req.body;
    const { id: userId } = req.user;

    try {
        const profile = await findProfileByUserId(userId);
        if (!profile) {
            return res.status(404).json({ msg: 'Profile not found' });
        }

        const transaction = new Transaction({
            title,
            category,
            dateOfCreation: new Date(),
            lastUpdate: new Date(),
            budget,
            image,
            transactionsHistorique: [],
        });

        await transaction.save();

        profile.transactionItems.push(transaction._id);
        await profile.save();

        res.status(201).json(transaction);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Add a new transaction history item
export const addTransactionHistoryItem = async (req, res) => {
    handleValidationErrors(req, res);

    const { transactionId } = req.params;
    const { amount, date, description } = req.body;

    try {
        const transaction = await Transaction.findById(transactionId);

        if (!transaction) {
            return res.status(404).json({ msg: 'Transaction not found' });
        }

        transaction.transactionsHistorique.push({ amount, date, description });
        transaction.lastUpdate = new Date();
        await transaction.save();

        res.status(201).json(transaction);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Edit a transaction history item
export const editTransactionHistoryItem = async (req, res) => {
    handleValidationErrors(req, res);

    const { transactionId, historyItemId } = req.params;
    const { amount, date, description } = req.body;

    try {
        const transaction = await Transaction.findById(transactionId);

        if (!transaction) {
            return res.status(404).json({ msg: 'Transaction not found' });
        }

        const historyItem = transaction.transactionsHistorique.id(historyItemId);

        if (!historyItem) {
            return res.status(404).json({ msg: 'Transaction history item not found' });
        }

        historyItem.amount = amount;
        historyItem.date = date;
        historyItem.description = description;
        transaction.lastUpdate = new Date();
        await transaction.save();

        res.json(transaction);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Get all transactions for the logged-in user
export const getAllTransactions = async (req, res) => {
    const { id: userId } = req.user;
    try {
        const profile = await findProfileByUserId(userId);
        if (!profile) {
            return res.status(404).json({ msg: 'Profile not found' });
        }

        const transactions = await Transaction.find({ _id: { $in: profile.transactionItems } });
        res.json(transactions);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Get transactions by date for the logged-in user
export const getTransactionsByDate = async (req, res) => {
    const { startDate, endDate } = req.query;
    const { id: userId } = req.user;

    try {
        const profile = await findProfileByUserId(userId);
        if (!profile) {
            return res.status(404).json({ msg: 'Profile not found' });
        }

        const transactions = await Transaction.find({
            _id: { $in: profile.transactionItems },
            dateOfCreation: { $gte: new Date(startDate), $lte: new Date(endDate) },
        });

        res.json(transactions);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Update a transaction
export const updateTransaction = async (req, res) => {
    handleValidationErrors(req, res);

    const { title, category, budget, image } = req.body;
    const updatedFields = { title, category, budget, image, lastUpdate: new Date() };

    try {
        let transaction = await Transaction.findById(req.params.id);

        if (!transaction) {
            return res.status(404).json({ msg: 'Transaction not found' });
        }

        transaction = await Transaction.findByIdAndUpdate(
            req.params.id,
            { $set: updatedFields },
            { new: true }
        );

        res.json(transaction);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Delete a transaction
export const deleteTransaction = async (req, res) => {
    try {
        const transactionId = req.params.id;
        const result = await Transaction.findByIdAndDelete(transactionId);

        if (!result) {
            return res.status(404).json({ msg: 'Transaction not found' });
        }

        res.json({ msg: 'Transaction removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

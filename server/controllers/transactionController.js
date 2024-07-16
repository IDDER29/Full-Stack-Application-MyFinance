import { validationResult } from 'express-validator';
import { TransactionItem } from '../models/Transaction.js';
import { Profile } from '../models/Profile.js';

// Helper function for handling validation errors
const handleValidationErrors = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
};

// Add a new transaction item
export const addTransactionItem = async (req, res) => {
    handleValidationErrors(req, res);

    const { name, budget, amountAchieved } = req.body;
    const { id: userId } = req.user;

    try {
        const profile = await Profile.findOne({ userId });
        if (!profile) {
            return res.status(404).json({ msg: 'Profile not found' });
        }

        const transactionItem = new TransactionItem({
            name,
            budget,
            amountAchieved,
            profileId: profile._id,
        });

        await transactionItem.save();

        profile.transactionItems.push(transactionItem._id);
        await profile.save();

        res.status(201).json(transactionItem);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Delete a transaction item
export const deleteTransactionItem = async (req, res) => {
    try {
        const transactionItemId = req.params.id;
        // Use findByIdAndDelete instead of drop
        const result = await TransactionItem.findByIdAndDelete(transactionItemId);

        if (!result) {
            return res.status(404).json({ msg: 'Transaction item not found' });
        }

        res.json({ msg: 'Transaction item removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};


// Update a transaction item
export const updateTransactionItem = async (req, res) => {
    handleValidationErrors(req, res);

    const { name, budget, amountAchieved } = req.body;
    const updatedFields = { name, budget, amountAchieved };

    try {
        let transactionItem = await TransactionItem.findById(req.params.id);

        if (!transactionItem) {
            return res.status(404).json({ msg: 'Transaction item not found' });
        }

        transactionItem = await TransactionItem.findByIdAndUpdate(
            req.params.id,
            { $set: updatedFields },
            { new: true }
        );

        res.json(transactionItem);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Get all transaction items for a profile
export const getAllTransactionItems = async (req, res) => {
    try {
        const transactionItems = await TransactionItem.find({ profileId: req.params.profileId });
        res.json(transactionItems);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Get transaction items by date range
export const getTransactionItemsByDate = async (req, res) => {
    const { startDate, endDate } = req.query;

    try {
        const transactionItems = await TransactionItem.find({
            profileId: req.params.profileId,
            dateCreated: { $gte: new Date(startDate), $lte: new Date(endDate) },
        });

        res.json(transactionItems);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

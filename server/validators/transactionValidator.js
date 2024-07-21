import { check, body } from 'express-validator';

export const validateTransaction = [
    check('title').not().isEmpty().withMessage('Title is required'),
    check('category').not().isEmpty().withMessage('Category is required'),
    check('budget').isNumeric().withMessage('Budget must be a number'),
];

export const validateTransactionHistoryItem = [
    check('amount').isNumeric().withMessage('Amount must be a number'),
    check('date').isISO8601().withMessage('Date must be a valid date'),
    check('description').not().isEmpty().withMessage('Description is required'),
];

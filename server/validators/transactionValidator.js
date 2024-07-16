import { check } from 'express-validator';

export const validateTransactionItem = [
    check('name', 'Name is required').not().isEmpty(),
    check('budget', 'Budget is required and should be a number').isNumeric(),
    check('amountAchieved', 'Amount achieved should be a number').optional().isNumeric(),
    check('profileId', 'Profile ID is required').not().isEmpty(),
];

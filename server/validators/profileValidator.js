import { check, body } from 'express-validator';

export const updateProfileValidator = [
    check('username').optional().isString().withMessage('Username must be a string'),
    check('currentTotalIncome').optional().isNumeric().withMessage('Current total income must be a number'),
    check('goalAmount').optional().isNumeric().withMessage('Goal amount must be a number'),
    check('bio').optional().isString().withMessage('Bio must be a string'),
    check('address').optional().isString().withMessage('Address must be a string'),
    check('phoneNumber').optional().isString().withMessage('Phone number must be a string'),
    check('avatar').optional().isString().withMessage('Avatar must be a string'),
    check('preferences.currency').optional().isString().withMessage('Currency must be a string'),
    check('preferences.language').optional().isString().withMessage('Language must be a string'),
    body('incomeSources').optional().isArray().withMessage('Income sources must be an array'),
    body('incomeSources.*.source').optional().isString().withMessage('Income source must be a string'),
    body('incomeSources.*.amount').optional().isNumeric().withMessage('Income source amount must be a number'),
];

export const registerValidator = [
    check('name').not().isEmpty().withMessage('Name is required'),
    check('email').isEmail().withMessage('Email must be valid'),
    check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
];

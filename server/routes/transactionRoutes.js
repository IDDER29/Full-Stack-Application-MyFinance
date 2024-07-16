import express from 'express';
import { requireAuth } from '../middleware/auth.js';
import {
    addTransactionItem,
    deleteTransactionItem,
    updateTransactionItem,
    getAllTransactionItems,
    getTransactionItemsByDate
} from '../controllers/transactionController.js';
import { validateTransactionItem } from '../validators/transactionValidator.js';
import { validationResult } from 'express-validator';

const router = express.Router();

const validateRequest = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

router.post('/add', requireAuth, validateTransactionItem, validateRequest, addTransactionItem);
router.delete('/:id', requireAuth, deleteTransactionItem);
router.put('/:id', requireAuth, validateTransactionItem, validateRequest, updateTransactionItem);
router.get('/:profileId', requireAuth, getAllTransactionItems);
router.get('/:profileId/date', requireAuth, getTransactionItemsByDate);

export default router;

import express from 'express';
import { requireAuth } from '../middleware/auth.js';
import {
    addTransaction,
    addTransactionHistoryItem,
    editTransactionHistoryItem,
    deleteTransaction,
    updateTransaction,
    getAllTransactions,
    getTransactionsByDate
} from '../controllers/transactionController.js';
import { validateTransaction, validateTransactionHistoryItem } from '../validators/transactionValidator.js';
import handleValidationErrors from '../middleware/handleValidationErrors.js';

const router = express.Router();

router.post('/add', requireAuth, validateTransaction, handleValidationErrors, addTransaction);
router.post('/:transactionId/history', requireAuth, validateTransactionHistoryItem, handleValidationErrors, addTransactionHistoryItem);
router.put('/:transactionId/history/:historyItemId', requireAuth, validateTransactionHistoryItem, handleValidationErrors, editTransactionHistoryItem);
router.delete('/:id', requireAuth, deleteTransaction);
router.put('/:id', requireAuth, validateTransaction, handleValidationErrors, updateTransaction);
router.get('/', requireAuth, getAllTransactions);
router.get('/date', requireAuth, getTransactionsByDate);

export default router;

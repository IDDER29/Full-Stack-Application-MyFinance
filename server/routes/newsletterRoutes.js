import express from 'express';
import { subscribeToNewsletter } from '../controllers/newsletterController.js';
import { requireAuth } from '../middleware/auth.js'; // Example authentication middleware if needed

const router = express.Router();

// POST /api/newsletter/subscribe
router.post('/subscribe', requireAuth, subscribeToNewsletter);

export default router;

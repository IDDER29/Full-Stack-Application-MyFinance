import express from 'express';
import { requireAuth } from '../middleware/auth.js';
import { updateProfile } from '../controllers/profileController.js';
import { updateProfileValidator } from '../validators/profileValidator.js'; // Import the updateProfileValidator
import { validationResult } from 'express-validator';

const router = express.Router();

const validateRequest = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

router.patch('/update', requireAuth, updateProfileValidator, validateRequest, updateProfile);

export default router;

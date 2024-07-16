import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';
import { requireAuth } from '../middleware/auth.js';

const router = express.Router();

// @route  POST api/auth/register
// @desc   Register user
// @access Public
router.post('/register', registerUser);

// @route  POST api/auth/login
// @desc   Authenticate user & get token
// @access Public
router.post('/login', loginUser);

// Example of a protected route
// @route  GET api/auth/protected
// @desc   Protected route example
// @access Private
router.get('/protected', requireAuth, (req, res) => {
    res.json({ msg: 'This is a protected route', user: req.user });
});

export default router;

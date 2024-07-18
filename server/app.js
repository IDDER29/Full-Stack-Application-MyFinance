import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import profileRoutes from './routes/profileRoutes.js';
import transactionRoutes from './routes/transactionRoutes.js';
import newsletterRoutes from './routes/newsletterRoutes.js';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors(
    {
        origin: '*'
    }
));

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/transaction', transactionRoutes);
app.use('/api/newsletter', newsletterRoutes);

export default app;

import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cron from 'node-cron';
import app from './app.js';

import { sendWeeklyNewsletter } from './middleware/newsletter.js';

dotenv.config();

// Connect to MongoDB
async function startServer() {
    try {
        await connectDB(); // Ensure the database connection is established before starting the server
        const PORT = process.env.PORT || 3000;

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
            // Schedule the weekly newsletter to be sent every Monday at 9:00 AM
            cron.schedule('0 9 * * 1', async () => {
                try {
                    await sendWeeklyNewsletter();
                } catch (error) {
                    console.error('Error in sending weekly newsletter:', error);
                }
            });
        });
    } catch (error) {
        console.error("Failed to start the server:", error.message);
    }
}

startServer();

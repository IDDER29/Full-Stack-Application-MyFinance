import dotenv from 'dotenv';
import app from './app.js';
import connectDB from './config/db.js';

dotenv.config();

// Connect to MongoDB
async function startServer() {
    try {
        await connectDB(); // Ensure the database connection is established before starting the server
        const PORT = process.env.PORT || 3000;

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Failed to start the server:", error.message);
    }
}

startServer();

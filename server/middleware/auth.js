import dotenv from 'dotenv/config';
import jwt from 'jsonwebtoken';

// dotenv.config();

export const requireAuth = (req, res, next) => {
    // Get token from header
    const authHeader = req.headers['authorization'];

    // Check if not token
    if (!authHeader) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    // Verify token
    try {
        const token = authHeader.split(' ')[1]; // Split "Bearer <token>" to get the token part
        // console.log('Extracted Token:', token);
        jwt.verify(token, process.env.Access_token, (err, decodedToken) => {
            console.log("secretkey",process.env.Access_token);
            if (err) {
                console.log('Token verification failed:', err.message);
                return res.status(401).json({ message: 'Unauthorized access. Please authenticate.' });
            } else {
                const { id } = decodedToken;
                req.user = { id };

                next();
            }
        });
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
};

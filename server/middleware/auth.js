import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

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
        jwt.verify(token, process.env.Access_token, (err, decodedToken) => {
            if (err) {
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

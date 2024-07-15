import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

export const setTocken = (payload) => {
    return jwt.sign(payload, "ac369bf6b37321dee151a1dd47532512819ed80c114bb5bb0f5636af0821a291", { expiresIn: '1h' }, (err, token) => {
        if (err) throw err;

    });

};

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
        jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
            if (err) {
                return res.status(401).json({ message: 'Unauthorized access. Please authenticate.' });
            } else {
                const { id, isAdmin } = decodedToken;
                req.user = { id, isAdmin };

                next();
            }
        });
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
};

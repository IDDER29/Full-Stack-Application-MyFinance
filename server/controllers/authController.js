import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';

const setTocken = (payload) => {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, process.env.Access_token, { expiresIn: 3600 }, (err, token) => {
            if (err) {
                reject(err);
            } else {
                resolve(token);
            }
        });
    });
};

export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: 'Please fill in all fields' });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
        return res.status(400).json({ error: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
        name,
        email,
        password: hashedPassword,
    });

    await user.save();

    return res.status(201).json({ message: 'User created successfully' });
};

export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({ error: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ error: 'Invalid credentials' });
    }

    const payload = {
        id: user._id,
        isAdmin: user.isAdmin,
    };
    try {
        const token = await setTocken(payload);
        res.setHeader("Authorization", `Bearer ${token}`);
        res.status(200).json({ message: `Welcome back ${user.name}` });
    } catch (err) {
        res.status(500).json({ error: 'Error generating token' });
    }
};

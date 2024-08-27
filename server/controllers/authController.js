import bcrypt from 'bcryptjs';
import { User } from '../models/User.js';
import { Profile } from '../models/Profile.js';
import createtoken from '../utils/jwt.js';

const setToken = (payload) => {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, process.env.Access_token, { expiresIn: '1h' }, (err, token) => {
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

    try {
        const userExists = await User.findOne({ email });
        console.log(userExists);
        if (userExists) {
            return res.status(400).json({ error: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("password",hashedPassword);

        // const user = new User({
        //     name,
        //     email,
        //     password: hashedPassword,
        // });

        const useradded = await User.create({
            name,
            email,
            password: hashedPassword,
        });
        // const useradded = await user.save();
        console.log("user",useradded);
        

        // Create a profile with default values
        // const profile = new Profile({
        //     username: name,
        //     currentTotalIncome: 0,
        //     goalAmount: 0,
        //     userId: user._id,
        // });

        const profileAdded= await Profile.create({
            username: name,
            currentTotalIncome: 0,
            goalAmount: 0,
            userId: useradded._id,
        });
        console.log("profile",profileAdded)
        // const profileAdded= await profile.save();
        const token = await createtoken(useradded);
        console.log("token",token);
        
        return res.status(201).json({ message: 'User registered successfully', token });
    } catch (err) {
        // console.error(err.message);
        return res.status(500).json({ error: 'Server error' });
    }
};

export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
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

        const token = await setToken(payload);
        res.setHeader("Authorization", `Bearer ${token}`);

        return res.status(200).json({ message: 'Login successful', token });
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ error: 'Server error' });
    }
};

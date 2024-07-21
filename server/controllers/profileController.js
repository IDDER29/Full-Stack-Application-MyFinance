import { Profile } from '../models/Profile.js';
import { User } from '../models/User.js';

export const updateProfile = async (req, res) => {
    const { id: userId } = req.user;
    console.log('userId', userId);
    const updateData = req.body;

    try {
        const profile = await Profile.findOneAndUpdate(
            { userId },
            { $set: updateData },
            { new: true }
        );

        if (!profile) {
            return res.status(404).json({ error: 'Profile not found' });
        }

        // Update isProfileCompleted field in User model if needed
        // await User.findByIdAndUpdate(userId, { isProfileCompleted });

        res.status(200).json({ message: 'Profile updated successfully', profile });
    } catch (error) {
        res.status(500).json({ error: 'Error updating profile' });
    }
};

export const sendProfile = async (req, res) => {
    const { id: userId } = req.user;

    try {
        const profile = await Profile.findOne(
            { userId }
        );

        if (!profile) {
            return res.status(404).json({ error: 'Profile not found' });
        }

        res.status(200).json({ message: 'Profile send successfully', profile });
    } catch (error) {
        res.status(500).json({ error: 'Error sending profile' });
    }
};

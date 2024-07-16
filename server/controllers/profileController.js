import { Profile } from '../models/Profile.js';
import { User } from '../models/User.js';

export const updateProfile = async (req, res) => {
    const { id: userId } = req.user;
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

        // Update isProfileCompleted field in User model
        //  await User.findByIdAndUpdate(userId, { isProfileCompleted  });

        res.status(200).json({ message: 'Profile updated successfully', profile });
    } catch (error) {
        res.status(500).json({ error: 'Error updating profile' });
    }
};

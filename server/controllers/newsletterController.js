import { User } from '../models/User.js';
import { StatusCodes } from 'http-status-codes';
import { sendConfirmationEmail } from '../middleware/newsletter.js';

export const subscribeToNewsletter = async (req, res) => {
    const userId = req.user.id; // Assuming user ID is available in req.user after authentication middleware

    try {
        const user = await User.findByIdAndUpdate(
            userId,
            { newsletterSubscription: true },
            { new: true }
        );

        if (!user) {
            return res.status(StatusCodes.NOT_FOUND).json({ error: 'User not found' });
        }

        // Send confirmation email
        await sendConfirmationEmail(user.email);

        res.status(StatusCodes.OK).json({ message: 'Successfully subscribed to the newsletter' });

    } catch (error) {
        console.error('Error subscribing to newsletter:', error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
    }
};

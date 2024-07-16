import nodemailer from 'nodemailer';
import { User } from '../models/User.js';


const user = process.env.smtpUser;
const port = process.env.smtpPort;
const password = process.env.smtpPassword;

const sendConfirmationEmail = async (email) => {
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.zoho.com',
            port: port,
            secure: true,
            auth: {
                user: user,
                pass: password
            }
        });

        const mailOptions = {
            from: user, // Update with your "from" email address
            to: email,
            subject: 'Subscription Confirmation',
            html: `
                <h1>Subscription Confirmation</h1>
                <p>Thank you for subscribing to our newsletter.</p>
                <p>You will receive weekly updates every Monday.</p>
                <p>Best regards,</p>
                <p>Your Company Name</p>
            `
        };

        const info = await transporter.sendMail(mailOptions);
        console.log(`Confirmation email sent to ${email}: ${info.response}`);

    } catch (error) {
        console.error(`Error sending confirmation email: ${error.message}`);
        throw error; // Re-throw the error for centralized error handling
    }
};

const sendWeeklyNewsletter = async () => {
    try {
        const users = await User.find({ newsletterSubscription: true });

        const transporter = nodemailer.createTransport({
            host: 'smtp.zoho.com',
            port: port,
            secure: true,
            auth: {
                user: user,
                pass: password
            }
        });

        users.forEach(async (user) => {
            const mailOptions = {
                from: user, // Update with your "from" email address
                to: user.email,
                subject: 'Weekly Newsletter',
                html: `
                    <h1>Hello Subscriber!</h1>
                    <p>Welcome to our weekly newsletter.</p>
                    <p>Here's what's new this week:</p>
                    <ul>
                        <li><b>News Item 1:</b> Exciting updates on our new product launch.</li>
                        <li><b>News Item 2:</b> Tips and tricks for getting the most out of our service.</li>
                        <li><b>News Item 3:</b> Special discounts for our loyal subscribers.</li>
                    </ul>
                    <p>Thank you for being a valued subscriber. Stay tuned for more updates next week!</p>
                    <p>Best regards,</p>
                    <p>Your Company Name</p>
                `
            };

            const info = await transporter.sendMail(mailOptions);
            console.log(`Newsletter sent to ${user.email}: ${info.response}`);
        });

    } catch (error) {
        console.error(`Error sending weekly newsletter: ${error.message}`);
        throw error; // Re-throw the error for centralized error handling
    }
};




export { sendConfirmationEmail, sendWeeklyNewsletter };

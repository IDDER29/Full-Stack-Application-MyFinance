import nodemailer from "nodemailer";
import { User } from "../models/UserSchema";
import "dotenv/config";
import { StatusCodes } from "http-status-codes";
import crone from "node-cron"

const user = process.env.smtpUser
const port = process.env.smtpPort
const password = process.env.smtpPassword

const weeklyNewsletter = crone.schedule('0 9 * * 1', async (req, res) => {
    try {
        const users = await User.find({ newsLatterSubscribed: true });
        const transporter = nodemailer.createTransport({
            host: "smtp.zoho.com",
            port: port,
            secure: true,
            auth: {
                user: user,
                pass: password
            }
        })
        users.forEach(async (user) => {
            const mailoption = {
                from: user,
                to: user.email,
                Object: "thank you for you subscription for our news letter",
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
                    `,
            }
            transporter.sendMail(mailoption, (err, info) => {
                if (err) {
                    if (error) {
                        console.log(`Error: ${err}`);
                    } else {
                        console.log(`Email sent: ${info.response}`);
                    }
                }
            })
        })
    } catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error });
    }
})
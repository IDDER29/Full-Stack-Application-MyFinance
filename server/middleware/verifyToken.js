import "dotenv/config";
import jwt from "jsonwebtoken";
import StatusCodes from "http-status-codes"

const secritkey = process.env.Access_token

const verifyToken = (req, res, next) => {
    try {
        const { autorazation } = req.headers
        if (!autorazation) {
            res.status(StatusCodes.UNAUTHORIZED).json({message:"no token provided "})
        }
        const token = autorazation.split(" ")[1]
        if (!token) {
            res.status(StatusCodes.UNAUTHORIZED).json({message:"no token provided "})
        }
        const Payload = jwt.verify(token, secritkey)
        console.log(Payload);
        req.user = Payload
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
};

export default verifyToken

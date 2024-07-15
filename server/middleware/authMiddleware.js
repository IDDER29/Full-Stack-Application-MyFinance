import "dotenv/config";
import jwt from "jsonwebtoken";




const requireAuth = (req, res, next) => {
    const authHeader = req.headers["authorization"];

    if (authHeader) {
        const token = authHeader.split(" ")[1]; // Split "Bearer <token>" to get the token part
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decodedToken) => {
            if (err) {
                res
                    .status(401)
                    .json({ message: "Unauthorized access. Please authenticate." });
            } else {
                const { id, isAdmin } = decodedToken;
                req.user = { id, isAdmin };

                next();
            }
        });
    } else {
        res
            .status(401)
            .json({ message: "Unauthorized access. Please authenticate." });
    }
};

export { setTocken, requireAuth };
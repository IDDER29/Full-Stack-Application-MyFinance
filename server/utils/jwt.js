import "dotenv/config"
import jwt from "jsonwebtoken";


const secrittoken = process.env.Access_token;

const createtoken = (user)=>{
    const signtoken = jwt.sign({user},secrittoken,{expiresIn:"1d"})
    return signtoken;
}

export default createtoken;
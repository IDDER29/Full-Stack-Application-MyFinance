import conectDB from "../models/connection";
import { User } from "../models/UserSchema";
import createtoken from "../utils/jwt";
import { StatusCodes } from "http-status-codes";
import hashPassword from "../utils/hashPassWord"

import conectDB from "../models/connection";

conectDB()

const newUser = async (req, res) => {
    const { name, email, password } = req.body
    if (!name || !email || !password) {
        return res.status(StatusCodes.BAD_REQUEST).json({error:"you have messed some fealeds please check all the fealdes"})
    }
    const thepasseorde = hashPassword(password)
    const user =  User.create({
        name,
        email,
        password:thepasseorde
    })
    const token = createtoken(user)
    return res.status(StatusCodes.CREATED).json({token})
}


const newUSer = async()
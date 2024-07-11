import {hash,compare} from "bcrypt"

const hashPassword = async(password)=>{
    try {
        const hashed = await hash(password,20)
        return hashed
    } catch (error) {
        console.log(error);
    }
}
import bcrypt from "bcrypt"

const caompairPassword = async (password,hashedPassword)=>{
    const compared = await bcrypt.compare(password,hashedPassword)
    return compared
}
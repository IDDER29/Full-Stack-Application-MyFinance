import mongoose from "mongoose";

const {Schema,model} = mongoose

const UserSchema = new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    profileComplaited:{type:Boolean,default:false},
    newsLatterSubscribed:{type:Boolean,default:false},
    createdAt:{type:Date,default:Date.now},
    updatedAt:{type:Date,default:Date.now},
},{timestamps:true});

export const User = model("User",UserSchema)
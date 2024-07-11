import mongoose from "mongoose";

const { Schema, model } = mongoose;

const profileSChima = new Schema({
    username: { type: String, required: true },
    salare: { type: Number, required: true },
    bio: { type: String, required: true },
    sex: { type: Boolean, required: true }

});

export const porfile = model("profil", profileSChima)
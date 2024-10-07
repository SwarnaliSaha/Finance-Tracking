import mongoose from "mongoose";

export interface IRole {
    _id : string,
    name : string
}

export const Roles = {
    Admin:new mongoose.mongo.ObjectId("670398989d0b69b6b9a5f7e5"),
    User:new mongoose.mongo.ObjectId("670398a29d0b69b6b9a5f7e7")
}
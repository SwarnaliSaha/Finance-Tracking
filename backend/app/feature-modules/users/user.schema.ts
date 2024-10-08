import { IUser } from "./user.type";
import { Schema,model } from "mongoose";
import { BaseSchema } from "../../utility/base-schema";

const UserSchema = new BaseSchema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    role : {
        type : Schema.Types.ObjectId,
        ref : "Role",
        required : true
    }
})

type UserDocument = Document & IUser;
export const UserModel = model<UserDocument>("User",UserSchema)
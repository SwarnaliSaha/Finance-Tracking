import { IUser } from "./user.type";
import { UserModel } from "./user.schema";
import { FilterQuery,UpdateQuery } from "mongoose";

const create = (user : IUser) => UserModel.create(user);

const updateOne = async(filter : FilterQuery<IUser>,update:UpdateQuery<IUser>)=>{
    return await UserModel.updateOne(filter,update)
}

const findOne = async(filter : Partial<IUser>)=>{
    return await UserModel.findOne({
        ...filter,
        isDeleted : false
    })
}

const find = (pipeline :any) => UserModel.aggregate(pipeline)


export default {
    create,
    updateOne,
    findOne,
    find
}

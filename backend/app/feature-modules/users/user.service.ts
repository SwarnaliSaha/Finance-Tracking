import userRepo from "./user.repo";
import { IUser } from "./user.type";
import { user_responses } from "./user.response";
import { FilterQuery,UpdateQuery,Types } from "mongoose";
import { createPipeline } from "../../utility/pipeline";

const createUser = async(user : IUser)=>{
    const record = await userRepo.create(user);

    if(!user) throw user_responses.user_not_created;

    return user_responses.user_created
}

const updateOne = async(filter : FilterQuery<IUser>,update:UpdateQuery<IUser>)=>{
    return await userRepo.updateOne(filter,update)
}

const updateUser = async(userId : string, updateObject: object)=>{
    const updatedUser = await userRepo.updateOne(
        {_id : new Types.ObjectId(userId)},
        {$set : updateObject}
    )

    if (!updatedUser) throw user_responses.user_not_updated;

    return user_responses.user_updated
}

const deleteUser = async(userId : string)=>{
    const deletedUser = await userRepo.updateOne(
        {_id : new Types.ObjectId(userId)},
        {$set : {
            isDeleted : true
        }}
    )

    if (!deletedUser) throw user_responses.user_not_deleted;

    return user_responses.user_deleted
}

const findUser = async(filter : Partial<IUser>)=>{
    const founduser = await userRepo.findOne(filter);

    if(!founduser) throw user_responses.user_not_found;

    return founduser;
}

const viewAllUsers = async(query : any)=>{
    const {_id,filter} = query;

    const pipeline = createPipeline(filter);
    const aggregate = []

    if(_id){
        aggregate.push({
            $match : {
                _id : new Types.ObjectId(_id)
            }
        })
    }

    aggregate.push(...pipeline)

    const result = userRepo.find(aggregate);

    return result;
}

export default {
    createUser,
    updateOne,
    updateUser,
    deleteUser,
    findUser,
    viewAllUsers
}
import { IRole } from "./role.type";
import roleRepo from "./role.repo";
import { ObjectId } from "bson";

const createRole = (role : IRole) => roleRepo.create(role)

const deleteRole = async(roleId : ObjectId) =>{
    return roleRepo.updateOne(
        {
            _id : roleId
        },
        {
            $set : {
                isDeleted : true
            }
        }
    )
}

export default {
    createRole,
    deleteRole
}
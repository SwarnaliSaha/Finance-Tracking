import { IRole } from "./role.type";
import { RoleModel } from "./role.schema";
import { FilterQuery, UpdateQuery } from "mongoose";

const create = (role : IRole) => RoleModel.create(role);

const updateOne = async(filter: FilterQuery<IRole>, update : UpdateQuery<IRole>) => {
    return await RoleModel.updateOne(filter,update)
}

export default{
    create,
    updateOne
}
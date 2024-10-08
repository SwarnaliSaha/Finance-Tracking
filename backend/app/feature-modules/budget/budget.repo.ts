import { IBudget } from "./budget.type";
import { BudgetModel } from "./budget.schema";
import { FilterQuery,UpdateQuery } from "mongoose";

const create = async(budget : IBudget) => await BudgetModel.create(budget);

const updateOne = async(filter : FilterQuery<IBudget>,update:UpdateQuery<IBudget>)=>{
    return await BudgetModel.updateOne(filter,update)
}

const findOne = async(filter : Partial<IBudget>)=>{
    return await BudgetModel.findOne({
        ...filter,
        isDeleted : false
    })
}

const find = (pipeline :any) => BudgetModel.aggregate(pipeline)


export default {
    create,
    updateOne,
    findOne,
    find
}

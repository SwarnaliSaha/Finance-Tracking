import budgetRepo from "./budget.repo";
import { IBudget } from "./budget.type";
import { budget_responses } from "./budget.response";
import { FilterQuery,UpdateQuery,Types } from "mongoose";
import { createPipeline } from "../../utility/pipeline";

const createBudget = async(user : IBudget)=>{
    const record = await budgetRepo.create(user);

    if(!user) throw budget_responses.budget_not_created;

    return budget_responses.budget_created
}

const updateOne = async(filter : FilterQuery<IBudget>,update:UpdateQuery<IBudget>)=>{
    return await budgetRepo.updateOne(filter,update)
}

const updateBudget = async(userId : string, updateObject: object)=>{
    const updatedUser = await budgetRepo.updateOne(
        {_id : new Types.ObjectId(userId)},
        {$set : updateObject}
    )

    if (!updatedUser) throw budget_responses.budget_not_updated;

    return budget_responses.budget_updated
}

const deleteBudget = async(userId : string)=>{
    const deletedUser = await budgetRepo.updateOne(
        {_id : new Types.ObjectId(userId)},
        {$set : {
            isDeleted : true
        }}
    )

    if (!deletedUser) throw budget_responses.budget_not_deleted;

    return budget_responses.budget_deleted
}

const findBudget = async(filter : Partial<IBudget>)=>{
    const founduser = await budgetRepo.findOne(filter);

    if(!founduser) throw budget_responses.budget_not_found;

    return founduser;
}

const viewAllBudgets = async(query : any)=>{
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

    const result = budgetRepo.find(aggregate);

    return result;
}

export default {
    createBudget,
    updateOne,
    updateBudget,
    deleteBudget,
    findBudget,
    viewAllBudgets
}
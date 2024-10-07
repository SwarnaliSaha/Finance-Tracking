import { ITransactions } from "./transactions.type";
import { TransactionsModel } from "./transacrions.schema";
import { FilterQuery,UpdateQuery } from "mongoose";

const create = (transaction:ITransactions)=> TransactionsModel.create(transaction);

const updateOne = async (filter:FilterQuery<ITransactions>,update:UpdateQuery<ITransactions>) => {
    return await TransactionsModel.updateOne(filter,update)
}

const findOne = async(filters:Partial<ITransactions>)=>{
    return TransactionsModel.findOne({
        ...filters,
        isDeleted:false
    })
}

const find = (pipeline:any) => TransactionsModel.aggregate(pipeline);

export default {
    create,
    updateOne,
    findOne,
    find
}
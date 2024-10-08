import { ObjectId } from "bson";

export interface IBudget {
    _id ?: ObjectId,
    name ?: string,
    description ?: string,
    userId : ObjectId,
    categoryId : ObjectId,
    allocatedAmount : number,
    startDate : Date,
    endDate ?: Date,
    amountSpent : number,
    overRun : boolean
}
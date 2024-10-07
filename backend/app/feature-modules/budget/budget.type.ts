import { ObjectId } from "bson";

export interface IBudget {
    _id ?: ObjectId,
    name ?: string,
    description ?: string,
    userId : ObjectId,
    categoryId : ObjectId,
    allocatedAmount : number,
    startDate : string,
    endDate ?: string,
    amountSpent : number,
    overRun : boolean
}
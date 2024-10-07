import { ObjectId } from "bson";

export interface ITransactions{
    _id:ObjectId,
    userId:ObjectId,
    dateOfTransaction:Date,
    typeOfTransaction:string,
    recipient:string,
    sender:string,
    amount:number,
    description:string,
    category:string,
    modeOfPayment:string,
    location:string,
    notes:string,
    tags:string
}
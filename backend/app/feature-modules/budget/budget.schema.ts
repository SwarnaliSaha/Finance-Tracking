import { IBudget } from "./budget.type";
import { Schema,model } from "mongoose";
import { BaseSchema } from "../../utility/base-schema";

const BudgetSchema = new BaseSchema({
    name : {
        type : String,
    },
    description : {
        type : String,
    },
    userId : {
        type : Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    categoryId : {
        type : Schema.Types.ObjectId,
        ref : "Category",
        required : true
    },
    allocatedAmount : {
        type : Number,
        required : true
    },
    startDate:{
        type : Date,
        requied : true,
        default : Date.now()
    },
    endDate : {
        type : Date,
        requied : true,
    },
    amountSpent : {
        type : Number,
        required : true
    },
    overRun : {
        type : Boolean,
        default : false
    }
})

type BudgetDocument = Document & IBudget;
export const BudgetModel = model<BudgetDocument>("Budget",BudgetSchema)
import { ITransactions } from "./transactions.type";
import mongoose, { model } from "mongoose";
import { BaseSchema } from "../../utility/base-schema";

const TransactionsSchema = new BaseSchema({
  userId: {
    type:String,
    // type: mongoose.Schema.Types.ObjectId,
    // ref: "User",
    required: true,
  },
  dateOfTransaction:{
    type: Date,
    required:true,
    default:new Date()
  },
  typeOfTransaction:{
    type:String,
    required:true,
    default:"expense"
  },
  recipient:{
    type:String,
    default:""
  },
  sender:{
    type:String,
    default:""
  },
  amount:{
    type:String,
    required:true,
    default:0
  },
  description:{
    type:String,
    default:""
  },
  category:{
    type:String,
    // type: mongoose.Schema.Types.ObjectId,
    // ref: "Category",
    required: true,
  },
  modeOfPayment:{
    type:String,
    required:true,
    default:"cash"
  },
  location:{
    type:String,
    default:""
  },
  notes:{
    type:String,
    default:""
  },
  tags:{
    type:String,
    default:""
  }
});

type TransactionsDocument = Document & ITransactions;
export const TransactionsModel = model<TransactionsDocument>("Transaction",TransactionsSchema)



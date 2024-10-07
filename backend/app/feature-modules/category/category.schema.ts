import { ICategory } from "./category.type";
import { model } from "mongoose";
import { BaseSchema } from "../../utility/base-schema";

const CategorySchema = new BaseSchema({
  name:{
    type:String,
    required:true,
    default:""
  },
});

type CategoryDocument = Document & ICategory;
export const CategoryModel = model<CategoryDocument>("Category",CategorySchema) 



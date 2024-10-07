import { Types } from "mongoose";
import categoryRepo from "./category.repo";
import { CATEGORY_RESPONSE } from "./category.response";
import { ICategory } from "./category.type";
import { createPipeline } from "../../utility/pipeline";

const createCategory = (category: ICategory) => {
  const record = categoryRepo.create(category);

  if (!record) throw CATEGORY_RESPONSE.CATEGORY_NOT_ADDED;
  return CATEGORY_RESPONSE.CATEGORY_ADDED;
};

const findCategory = async (filter: Partial<ICategory>) => {
  const foundCategory = await categoryRepo.findOne(filter);

  if (!foundCategory) throw CATEGORY_RESPONSE.CATEGORY_NOT_FOUND;
  return foundCategory;
};

const viewAllCategorys = async (query: any) => {
  const { categoryId, ...filter } = query;

  const pipeline = createPipeline(filter);

  const aggregate = [];

  if (categoryId) {
    aggregate.push({
      $match: {
        _id : new Types.ObjectId(categoryId)
      },
    });
  }

  aggregate.push(...pipeline);

  const result = await categoryRepo.find(aggregate);

  if (!result) throw CATEGORY_RESPONSE.CATEGORY_NOT_FOUND;
  else return result;
};

const updateCategory = async (
  categorytId: string,
  categoryObject: object = {}
) => {
  const category = await findCategory({
    _id: new Types.ObjectId(categorytId),
  });

  if (category) {
    const updatedCategory = await categoryRepo.updateOne(
      { _id: categorytId },
      {
        $set: categoryObject,
      }
    );

    if (!updatedCategory)
      throw CATEGORY_RESPONSE.CATEGORY_NOT_UPDATED;
    return CATEGORY_RESPONSE.CATEGORY_UPDATED;
  } else throw CATEGORY_RESPONSE.CATEGORY_NOT_FOUND;
};

const deleteCategory = async (categoryId: string) => {
  const deletedObject = await categoryRepo.updateOne(
    {
      _id: categoryId,
    },
    {
      $set: {
        isDeleted: true,
      },
    }
  );

  return CATEGORY_RESPONSE.CATEGORY_DELETED;
};

export default {
  createCategory,
  findCategory,
  viewAllCategorys,
  updateCategory,
  deleteCategory,
};

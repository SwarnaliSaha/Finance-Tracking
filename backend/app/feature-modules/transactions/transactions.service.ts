import { Types } from "mongoose";
import transactionsRepo from "./transactions.repo";
import { TRANSACTIONS_RESPONSE } from "./transactions.response";
import { ITransactions } from "./transactions.type";
import { createPipeline } from "../../utility/pipeline";

const createTransaction = (transaction: ITransactions) => {
  const record = transactionsRepo.create(transaction);

  if (!record) throw TRANSACTIONS_RESPONSE.TRANSACTION_NOT_ADDED;
  return TRANSACTIONS_RESPONSE.TRANSACTION_ADDED;
};

const findTransaction = async (filter: Partial<ITransactions>) => {
  const foundProject = await transactionsRepo.findOne(filter);

  if (!foundProject) throw TRANSACTIONS_RESPONSE.TRANSACTION_NOT_FOUND;
  return foundProject;
};

const viewAllTransactions = async (query: any) => {
  const { userId, ...filter } = query;

  const pipeline = createPipeline(filter);

  const aggregate = [];

  if (userId) {
    aggregate.push({
      $match: {
        // userId : new Types.ObjectId(userId)
        userId: userId,
      },
    });
  }

  aggregate.push(...pipeline);

  const result = await transactionsRepo.find(aggregate);

  if (!result) throw TRANSACTIONS_RESPONSE.TRANSACTION_NOT_FOUND;
  else return result;
};

const updateTransaction = async (
  transactiontId: string,
  transactionObject: object = {}
) => {
  const transaction = await findTransaction({
    _id: new Types.ObjectId(transactiontId),
  });

  if (transaction) {
    const updatedTransaction = await transactionsRepo.updateOne(
      { _id: transactiontId },
      {
        $set: transactionObject,
      }
    );

    if (!updatedTransaction)
      throw TRANSACTIONS_RESPONSE.TRANSACTION_NOT_UPDATED;
    return TRANSACTIONS_RESPONSE.TRANSACTION_UPDATED;
  } else throw TRANSACTIONS_RESPONSE.TRANSACTION_NOT_FOUND;
};

const deleteTransaction = async (transactionId: string) => {
  const deletedObject = await transactionsRepo.updateOne(
    {
      _id: transactionId,
    },
    {
      $set: {
        isDeleted: true,
      },
    }
  );

  return TRANSACTIONS_RESPONSE.TRANSACTION_DELETED;
};

export default {
  createTransaction,
  findTransaction,
  viewAllTransactions,
  updateTransaction,
  deleteTransaction,
};

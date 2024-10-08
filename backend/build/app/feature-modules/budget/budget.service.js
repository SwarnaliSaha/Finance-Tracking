"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const budget_repo_1 = __importDefault(require("./budget.repo"));
const budget_response_1 = require("./budget.response");
const mongoose_1 = require("mongoose");
const pipeline_1 = require("../../utility/pipeline");
const createBudget = (budget) => __awaiter(void 0, void 0, void 0, function* () {
    const modifiedBudget = Object.assign(Object.assign({}, budget), { startDate: new Date(budget.startDate), endDate: budget.endDate ? new Date(budget.endDate) : undefined });
    const record = yield budget_repo_1.default.create(modifiedBudget);
    if (!record)
        throw budget_response_1.budget_responses.budget_not_created;
    return budget_response_1.budget_responses.budget_created;
});
const updateOne = (filter, update) => __awaiter(void 0, void 0, void 0, function* () {
    return yield budget_repo_1.default.updateOne(filter, update);
});
const updateBudget = (userId, updateObject) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedUser = yield budget_repo_1.default.updateOne({ _id: new mongoose_1.Types.ObjectId(userId) }, { $set: updateObject });
    if (!updatedUser)
        throw budget_response_1.budget_responses.budget_not_updated;
    return budget_response_1.budget_responses.budget_updated;
});
const deleteBudget = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedBudget = yield budget_repo_1.default.updateOne({ _id: new mongoose_1.Types.ObjectId(userId) }, { $set: {
            isDeleted: true
        } });
    if (!deletedBudget)
        throw budget_response_1.budget_responses.budget_not_deleted;
    return budget_response_1.budget_responses.budget_deleted;
});
const findBudget = (filter) => __awaiter(void 0, void 0, void 0, function* () {
    const foundBudget = yield budget_repo_1.default.findOne(filter);
    if (!foundBudget)
        throw budget_response_1.budget_responses.budget_not_found;
    return foundBudget;
});
const viewAllBudgets = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id, filter } = query;
    const pipeline = (0, pipeline_1.createPipeline)(filter);
    const aggregate = [];
    if (_id) {
        aggregate.push({
            $match: {
                _id: new mongoose_1.Types.ObjectId(_id)
            }
        });
    }
    aggregate.push(...pipeline);
    const result = budget_repo_1.default.find(aggregate);
    return result;
});
exports.default = {
    createBudget,
    updateOne,
    updateBudget,
    deleteBudget,
    findBudget,
    viewAllBudgets
};

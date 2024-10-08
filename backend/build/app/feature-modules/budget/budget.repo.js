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
Object.defineProperty(exports, "__esModule", { value: true });
const budget_schema_1 = require("./budget.schema");
const create = (budget) => __awaiter(void 0, void 0, void 0, function* () { return yield budget_schema_1.BudgetModel.create(budget); });
const updateOne = (filter, update) => __awaiter(void 0, void 0, void 0, function* () {
    return yield budget_schema_1.BudgetModel.updateOne(filter, update);
});
const findOne = (filter) => __awaiter(void 0, void 0, void 0, function* () {
    return yield budget_schema_1.BudgetModel.findOne(Object.assign(Object.assign({}, filter), { isDeleted: false }));
});
const find = (pipeline) => budget_schema_1.BudgetModel.aggregate(pipeline);
exports.default = {
    create,
    updateOne,
    findOne,
    find
};

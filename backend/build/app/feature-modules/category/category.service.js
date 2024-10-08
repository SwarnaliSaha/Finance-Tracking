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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const category_repo_1 = __importDefault(require("./category.repo"));
const category_response_1 = require("./category.response");
const pipeline_1 = require("../../utility/pipeline");
const createCategory = (category) => {
    const record = category_repo_1.default.create(category);
    if (!record)
        throw category_response_1.CATEGORY_RESPONSE.CATEGORY_NOT_ADDED;
    return category_response_1.CATEGORY_RESPONSE.CATEGORY_ADDED;
};
const findCategory = (filter) => __awaiter(void 0, void 0, void 0, function* () {
    const foundCategory = yield category_repo_1.default.findOne(filter);
    if (!foundCategory)
        throw category_response_1.CATEGORY_RESPONSE.CATEGORY_NOT_FOUND;
    return foundCategory;
});
const viewAllCategorys = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const { categoryId } = query, filter = __rest(query, ["categoryId"]);
    const pipeline = (0, pipeline_1.createPipeline)(filter);
    const aggregate = [];
    if (categoryId) {
        aggregate.push({
            $match: {
                _id: new mongoose_1.Types.ObjectId(categoryId)
            },
        });
    }
    aggregate.push(...pipeline);
    const result = yield category_repo_1.default.find(aggregate);
    if (!result)
        throw category_response_1.CATEGORY_RESPONSE.CATEGORY_NOT_FOUND;
    else
        return result;
});
const updateCategory = (categorytId, categoryObject = {}) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield findCategory({
        _id: new mongoose_1.Types.ObjectId(categorytId),
    });
    if (category) {
        const updatedCategory = yield category_repo_1.default.updateOne({ _id: categorytId }, {
            $set: categoryObject,
        });
        if (!updatedCategory)
            throw category_response_1.CATEGORY_RESPONSE.CATEGORY_NOT_UPDATED;
        return category_response_1.CATEGORY_RESPONSE.CATEGORY_UPDATED;
    }
    else
        throw category_response_1.CATEGORY_RESPONSE.CATEGORY_NOT_FOUND;
});
const deleteCategory = (categoryId) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedObject = yield category_repo_1.default.updateOne({
        _id: new mongoose_1.Types.ObjectId(categoryId),
    }, {
        $set: {
            isDeleted: true,
        },
    });
    return category_response_1.CATEGORY_RESPONSE.CATEGORY_DELETED;
});
exports.default = {
    createCategory,
    findCategory,
    viewAllCategorys,
    updateCategory,
    deleteCategory,
};

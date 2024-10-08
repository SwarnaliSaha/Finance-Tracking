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
const user_repo_1 = __importDefault(require("./user.repo"));
const user_response_1 = require("./user.response");
const mongoose_1 = require("mongoose");
const pipeline_1 = require("../../utility/pipeline");
const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const record = user_repo_1.default.create(user);
    if (!user)
        throw user_response_1.user_responses.user_not_created;
    console.log(user_response_1.user_responses.user_created);
    return user_response_1.user_responses.user_created;
});
const updateOne = (filter, update) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_repo_1.default.updateOne(filter, update);
});
const updateUser = (userId, updateObject) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedUser = yield user_repo_1.default.updateOne({ _id: new mongoose_1.Types.ObjectId(userId) }, { $set: updateObject });
    if (!updatedUser)
        throw user_response_1.user_responses.user_not_updated;
    return user_response_1.user_responses.user_updated;
});
const deleteUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedUser = yield user_repo_1.default.updateOne({ _id: new mongoose_1.Types.ObjectId(userId) }, { $set: {
            isDeleted: true
        } });
    if (!deletedUser)
        throw user_response_1.user_responses.user_not_deleted;
    return user_response_1.user_responses.user_deleted;
});
const findUser = (filter) => __awaiter(void 0, void 0, void 0, function* () {
    const founduser = yield user_repo_1.default.findOne(filter);
    if (!founduser)
        throw user_response_1.user_responses.user_not_found;
    return founduser;
});
const viewAllUsers = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = query, filter = __rest(query, ["id"]);
    const pipeline = (0, pipeline_1.createPipeline)(filter);
    const aggregate = [];
    if (id) {
        aggregate.push({
            $match: {
                _id: new mongoose_1.Types.ObjectId(id),
            },
        });
    }
    aggregate.push(...pipeline);
    const result = yield user_repo_1.default.find(aggregate);
    if (!result)
        throw user_response_1.user_responses.user_not_found;
    else
        return result;
});
exports.default = {
    createUser,
    updateOne,
    updateUser,
    deleteUser,
    findUser,
    viewAllUsers
};

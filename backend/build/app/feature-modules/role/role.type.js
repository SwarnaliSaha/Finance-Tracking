"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roles = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.Roles = {
    Admin: new mongoose_1.default.mongo.ObjectId("670398989d0b69b6b9a5f7e5"),
    User: new mongoose_1.default.mongo.ObjectId("670398a29d0b69b6b9a5f7e7")
};

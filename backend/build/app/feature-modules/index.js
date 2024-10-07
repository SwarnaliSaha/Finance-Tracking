"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const role_router_1 = __importDefault(require("./role/role.router"));
const user_router_1 = __importDefault(require("./users/user.router"));
const transactions_router_1 = __importDefault(require("./transactions/transactions.router"));
exports.default = {
    RoleRouter: role_router_1.default,
    UserRouter: user_router_1.default,
    TransactionsRouter: transactions_router_1.default
};

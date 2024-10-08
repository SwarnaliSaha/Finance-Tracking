"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const route_type_1 = require("./route.type");
const index_1 = __importDefault(require("../feature-modules/index"));
exports.routes = [
    new route_type_1.Route("/roles", index_1.default.RoleRouter),
    new route_type_1.Route("/users", index_1.default.UserRouter),
    new route_type_1.Route("/transactions", index_1.default.TransactionsRouter),
    new route_type_1.Route("/budgets", index_1.default.BudgetRouter),
    new route_type_1.Route("/categories", index_1.default.CategoryRouter)
];

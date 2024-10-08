"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetModel = void 0;
const mongoose_1 = require("mongoose");
const base_schema_1 = require("../../utility/base-schema");
const BudgetSchema = new base_schema_1.BaseSchema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    categoryId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    allocatedAmount: {
        type: Number,
        required: true
    },
    startDate: {
        type: Date,
        requied: true,
        default: Date.now()
    },
    endDate: {
        type: Date,
        requied: true,
    },
    amountSpent: {
        type: Number,
        required: true
    },
    overRun: {
        type: Boolean,
        default: false
    }
});
exports.BudgetModel = (0, mongoose_1.model)("Budget", BudgetSchema);

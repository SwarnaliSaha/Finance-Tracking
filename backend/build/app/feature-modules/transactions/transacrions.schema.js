"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsModel = void 0;
const mongoose_1 = require("mongoose");
const base_schema_1 = require("../../utility/base-schema");
const TransactionsSchema = new base_schema_1.BaseSchema({
    userId: {
        type: String,
        // type: mongoose.Schema.Types.ObjectId,
        // ref: "User",
        required: true,
    },
    dateOfTransaction: {
        type: Date,
        required: true,
        default: new Date()
    },
    typeOfTransaction: {
        type: String,
        required: true,
        default: "expense"
    },
    recipient: {
        type: String,
        default: ""
    },
    sender: {
        type: String,
        default: ""
    },
    amount: {
        type: String,
        required: true,
        default: 0
    },
    description: {
        type: String,
        default: ""
    },
    category: {
        type: String,
        // type: mongoose.Schema.Types.ObjectId,
        // ref: "Category",
        required: true,
    },
    modeOfPayment: {
        type: String,
        required: true,
        default: "cash"
    },
    location: {
        type: String,
        default: ""
    },
    notes: {
        type: String,
        default: ""
    },
    tags: {
        type: String,
        default: ""
    }
});
exports.TransactionsModel = (0, mongoose_1.model)("Transaction", TransactionsSchema);

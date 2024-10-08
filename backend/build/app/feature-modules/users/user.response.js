"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user_responses = void 0;
exports.user_responses = {
    user_created: {
        statusCode: 200,
        message: "user is created successfully"
    },
    user_not_created: {
        statusCode: 400,
        message: "user not created!"
    },
    user_updated: {
        statusCode: 200,
        message: "user is updated successfully"
    },
    user_not_updated: {
        statusCode: 400,
        message: "user is not updated successfully"
    },
    user_deleted: {
        statusCode: 200,
        message: "user is deleted successfully"
    },
    user_not_deleted: {
        statusCode: 400,
        message: "user is not deleted"
    },
    user_not_found: {
        statusCode: 404,
        message: "user NOT FOUND"
    }
};

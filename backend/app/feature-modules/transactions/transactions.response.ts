export const TRANSACTIONS_RESPONSE = {
    TRANSACTION_ADDED : {
        statusCode:200,
        message:"this transaction is added successfully"
    },
    TRANSACTION_NOT_ADDED : {
        statusCode:400,
        message: "transaction not added"
    },
    TRANSACTION_NOT_FOUND : {
        statusCode : 404,
        message : "transaction not found"
    },
    TRANSACTION_UPDATED : {
        statusCode : 200,
        message : "transaction updated successfully"
    },
    TRANSACTION_NOT_UPDATED : {
        statusCode : 200,
        message : "transaction not updated"
    },
    TRANSACTION_DELETED : {
        statusCode : 200,
        message : "transaction deleted successfully"
    }
}
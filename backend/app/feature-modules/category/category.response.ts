export const CATEGORY_RESPONSE = {
    CATEGORY_ADDED : {
        statusCode:200,
        message:"this category is added successfully"
    },
    CATEGORY_NOT_ADDED : {
        statusCode:400,
        message: "category not added"
    },
    CATEGORY_NOT_FOUND : {
        statusCode : 404,
        message : "category not found"
    },
    CATEGORY_UPDATED : {
        statusCode : 200,
        message : "category updated successfully"
    },
    CATEGORY_NOT_UPDATED : {
        statusCode : 200,
        message : "category not updated"
    },
    CATEGORY_DELETED : {
        statusCode : 200,
        message : "category deleted successfully"
    }
}
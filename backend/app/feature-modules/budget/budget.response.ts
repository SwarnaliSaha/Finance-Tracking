export const budget_responses = {
    budget_created : {
        statusCode:200,
        message:"budget is crested successfully"
    },
    budget_not_created : {
        statusCode:400,
        message: "budget not created!"
    },
    budget_updated : {
        statusCode:200,
        message:"budget is updated successfully"
    },
    budget_not_updated : {
        statusCode:400,
        message:"budget is not updated successfully"
    },
    budget_deleted : {
        statusCode:200,
        message:"budget is deleted successfully"
    },
    budget_not_deleted : {
        statusCode:400,
        message:"budget is not deleted"
    },
    budget_not_found : {
        statusCode:404,
        message:"budget NOT FOUND"
    },
}
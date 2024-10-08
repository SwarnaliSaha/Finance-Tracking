import { Router,Request,Response,NextFunction } from "express";
import { ResponseHandler } from "../../utility/response-handler";
import budgetService from "./budget.service";

const router = Router()

router.post('/',async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const result = await budgetService.createBudget(req.body);
        res.send(new ResponseHandler(result));
    } 
    catch (error) {
        next(error)
    }
})

router.get('/',async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const filters = req.body;
        const result = await budgetService.viewAllBudgets(filters);

        res.send(new ResponseHandler(result))
    } 
    catch (error) {
        next(error);
    }
})

router.patch('/',async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const {_id:budgetId,...updateObject} = req.body;
        const result = await budgetService.updateBudget(budgetId,updateObject);
        res.send(new ResponseHandler(result));
    } 
    catch (error) {
        next(error);
    }
})

router.delete('/',async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const budgetId = req.body.budgetId;
        const result = await budgetService.deleteBudget(budgetId);
        
        res.send(new ResponseHandler(result));
    } 
    catch (error) {
        next(error);
    }
})

export default router;

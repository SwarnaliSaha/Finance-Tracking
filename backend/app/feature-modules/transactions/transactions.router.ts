import express,{Router,Request,Response,NextFunction} from "express"
import transactionsService from "./transactions.service";
import { ResponseHandler } from "../../utility/response-handler"

const router = Router();

router.post('/',(req:Request,res:Response,next:NextFunction)=>{
    try {
        const result = transactionsService.createTransaction(req.body);
        res.send(new ResponseHandler(result));
    } 
    catch (error) {
        next(error)
    }
})

router.get('/',async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const query = req.query;
        const result = await transactionsService.viewAllTransactions(query);

        res.send(new ResponseHandler(result))
    } 
    catch (error) {
        next(error);
    }
})

router.patch('/',async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const {_id:transactionId,...transactionObject} = req.body;
        const result = await transactionsService.updateTransaction(transactionId,transactionObject);
        res.send(new ResponseHandler(result));
    } 
    catch (error) {
        next(error);
    }
})

router.delete('/',async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const transactionId = req.body.transactionId;
        const result = await transactionsService.deleteTransaction(transactionId);
        
        res.send(new ResponseHandler(result));
    } 
    catch (error) {
        next(error);
    }
})


export default router;
import express,{Router,Request,Response,NextFunction} from "express"
import categoryService from "./category.service";
import { ResponseHandler } from "../../utility/response-handler"

const router = Router();

router.post('/',(req:Request,res:Response,next:NextFunction)=>{
    try {
        const result = categoryService.createCategory(req.body);
        res.send(new ResponseHandler(result));
    } 
    catch (error) {
        next(error)
    }
})

router.get('/',async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const query = req.query;
        const result = await categoryService.viewAllCategorys(query);

        res.send(new ResponseHandler(result))
    } 
    catch (error) {
        next(error);
    }
})

router.patch('/',async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const {_id:categoryId,...categoryObject} = req.body;
        const result = await categoryService.updateCategory(categoryId,categoryObject);
        res.send(new ResponseHandler(result));
    } 
    catch (error) {
        next(error);
    }
})

router.delete('/',async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const categoryId = req.body.categoryId;
        const result = await categoryService.deleteCategory(categoryId);
        
        res.send(new ResponseHandler(result));
    } 
    catch (error) {
        next(error);
    }
})


export default router;
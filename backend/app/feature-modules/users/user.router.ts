import userService from "./user.service";
import { ResponseHandler } from "../../utility/response-handler";
import { Router,Request,Response,NextFunction } from "express";

const router = Router()

router.post('/',async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const result = await userService.createUser(req.body);
        res.send(new ResponseHandler(result));
    } 
    catch (error) {
        next(error)
    }
})

router.get("/",async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const query = req.query;
        const result = await userService.viewAllUsers(query);

        res.send(new ResponseHandler(result))
    } 
    catch (error) {
        next(error)
    }

})

router.delete("/",async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const userId = req.body.userId;
        const result = await userService.deleteUser(userId);

        res.send(new ResponseHandler(result))
    } 
    catch (error) {
        next(error)
    }
})

export default router;
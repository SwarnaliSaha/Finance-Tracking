import { Router,Request,Response,NextFunction, response } from "express";
import roleService from "./role.service";
import { ResponseHandler } from "../../utility/response-handler";

const router = Router()

router.post('/',async(req : Request,res : Response,next : NextFunction)=>{
    try {
        const result = await roleService.createRole(req.body);
        res.send(new ResponseHandler(result))
    } 
    catch (error) {
        next(error)
    }
})

export default router;
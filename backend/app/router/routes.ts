import { ResponseHandler } from "../utility/response-handler";
import { Application,Request,Response,NextFunction, json } from "express";
import { routes } from "./route.data";

export const registerRoutes = (app:Application)=>{
    app.use(json());
    for(let route of routes){
        app.use(route.path,route.router)
    }
    app.use((err:any,req:Request,res:Response,next:NextFunction)=>{
        res.status(err.status||500).send(new ResponseHandler(null,err))
    })
}
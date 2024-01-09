import express, { NextFunction, Request, Response } from "express";
import ProductController from "../controller/product-controller";

export default function globalRoute(app:any){
    const api_route = express.Router();
    app.use('/api', api_route);
    api_route.use((req:any,res:any,next:NextFunction) => {
        next()
        ProductController(api_route);
    });
    ErrorHandlerMiddleWare(app);
}

function ErrorHandlerMiddleWare(app:any) {
    app.use((err:any, req:Request, res:Response, next:NextFunction) => {
        if(err){
            const { 
                statusCode=500, 
                message= 'Internal Server Error'
            } = err;
            res.status(statusCode).send({
                ok: false,
                message: message
            });
        }
    })
}
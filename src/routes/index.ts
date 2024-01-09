import express, { NextFunction, Request, Response } from "express";
import ProductController from "../controller/product-controller";
import path from "path";

export default function globalRoute(app:any){
    const api_route = express.Router();
    app.use('/api', api_route);
    api_route.use((req:any,res:any,next:NextFunction) => {
        next()
        ProductController(api_route);
    });
    serverView(app);
    ErrorHandlerMiddleWare(app);
}

function serverView(app:any) {
    app.use('/',(req:any,res:any,next:NextFunction) => {
        res.sendFile(path.join('index.html'));
    })
}

function ErrorHandlerMiddleWare(app:any) {
    app.use((err:any, req:Request, res:Response, next:NextFunction) => {
        if(err){
            const { statusCode=500, message } = err;
            res.status(statusCode).send(message);
        }
    })
}
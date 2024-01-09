import express, { NextFunction, Request, Response } from "express";
import ProductController from "../controller/product-controller";

export default function globalRoute(app:any){
    const api_route = express.Router();
    app.use('/api', api_route);
    ProductController(api_route);
}

function ErrorMiddleWare(app:any) {
    app.use((err:any, req:Request, res:Response, next:NextFunction) => {
        if(err){
            const { statusCode=500, message } = err;
            res.status(statusCode).send(message);
        }
    })
}
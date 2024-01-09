import express, { NextFunction, Request, Response } from "express";
export default function ProductController(app:any) {
    const product_route = express.Router();
    app.use('product',product_route);
}

export function createProduct(route:any) {
    route.post('/', async (req: Request, res: Response, next: NextFunction) => {
        
    });
}

export function getProduct(route:any) {
    route.get('/', async (req: Request, res: Response, next: NextFunction) => {
        
    })
}
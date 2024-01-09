import express, { NextFunction, Request, Response } from "express";
export default function ProductController(app:any) {
    const product_route = express.Router();
    app.use('/product',product_route);
    product_route.post('/', async (req: Request, res: Response, next: NextFunction) => {
        
    });

    product_route.get('/', async (req: Request, res: Response, next: NextFunction) => {
        res.send({
            name: 'Allo'
        })
    })

}
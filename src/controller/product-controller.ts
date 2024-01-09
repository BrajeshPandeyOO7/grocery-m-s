import express, { NextFunction, Request, Response } from "express";
import { createProduct, getProduct } from "../service/product-service";
import { BadRequestException } from "../utility/exception";
export default function ProductController(app:any) {
    const product_route = express.Router();
    app.use('/product',product_route);
    product_route.post('/', async (req: Request, res: Response, next: NextFunction) => {
        try {
            const body = req.body;
            if(Object.keys(body).length === 0)throw new BadRequestException('Body should be valid');
            const response = await createProduct(body);
            res.send({
                ok: true,
                data: response
            });
        } catch (error) {
            next(error);
        }
    });

    product_route.get('/', async (req: Request, res: Response, next: NextFunction) => {
        try {
            const response = await getProduct();
            res.send({
                ok: true,
                data: response
            });
        } catch (error) {
            next(error)
        }
    })

}
import { Product } from "../entities/Product";
import { ProductModel } from "../model/ProductModel";
import { getProductRepository } from "../repository";
import { BadRequestException } from "../utility/exception";

export const  createProduct = async (product: ProductModel): Promise<any> => {
    const productRepo = getProductRepository();
    let res =  await productRepo.insert(product);
}


export const getProduct = async (): Promise<any> => {
    const repo = getProductRepository();
    return await repo.find();
} 
import { AppDataSource } from "../db/data-source";
import { Product } from "../entities/Product";

export const getProductRepository = () => AppDataSource.getRepository(Product);
import ProductModel, { IProduct } from "../model/product-model"

export const  createProduct = async (product: IProduct): Promise<IProduct> => {
    const _prod = new ProductModel(product);
    const valid = _prod.validateSync();
    if(!valid) throw new BadRequestException(valid.message);
    return await _prod.save();
}


export const getProduct = async (): Promise<IProduct[]> => {
    return await ProductModel.find({}).exec();
} 
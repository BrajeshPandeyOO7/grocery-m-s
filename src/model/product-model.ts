import mongoose, { Schema, model } from "mongoose";

export interface IProduct {
    _id?: string | mongoose.Types.ObjectId;
    name: string;
    category: string;
    brand: string;
    supplier_id: string;
    unit_price: string;
    quantity_instock: number;
    weight: number; // weight should be in gram;
    manufacture_date: Date;
    expiry_date: Date;
}

const schema = new Schema({
    name : {
        type: Schema.Types.String,
        required: true
    },
    category: {
        type: Schema.Types.String,
        required: true
    },
    brand: {
        type: Schema.Types.String,
        required: false
    },
    supplier_id: {
        type: Schema.Types.String, // Keep string until we have supplier collection. then replace with objectId
        required: false
    },
    unit_price: {
        type: Schema.Types.Number,
        required: true
    },
    quantity_instock: {
        type: Schema.Types.Number,
        required: true
    },
    weight: {
        type: Schema.Types.Number,
        required: true
    }, // weight should be in gram;
    manufacture_date: {
        type: Schema.Types.Date,
        required: true
    },
    expiry_date: {
        type: Schema.Types.Date,
        required: true
    },

})

const ProductModel = mongoose.models.products || model('products', schema);
export default ProductModel;
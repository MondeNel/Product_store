// models/Product.js
import mongoose from 'mongoose';

/**
 * Product Schema defines the structure of a product document in MongoDB.
 */
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product name is required'],
    },
    price: {
        type: Number,
        required: [true, 'Product price is required'],
    },
    image: {
        type: String,
        required: [true, 'Product image URL is required'],
    },
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

export default Product;

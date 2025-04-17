import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Product from './models/product.model.js'; 

dotenv.config();

const app = express();

// ✅ Middleware to parse incoming JSON requests
app.use(express.json());

/**
 * @route   POST /api/products
 * @desc    Create a new product
 * @access  Public
 */
app.post('/api/products', async (req, res) => {
    const product = req.body;

    // ✅ Validate required fields
    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: 'Please provide all fields' });
    }

    const newProduct = new Product(product);

    try {
        await newProduct.save();
        return res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        console.error('Error saving product:', error.message);
        return res.status(500).json({ success: false, message: 'Server error' });
    }
});

/**
 * @route   DELETE /api/products/:id
 * @desc    Delete a product by ID
 * @access  Public
 */
app.delete('/api/products/:id', async (req, res) => {
    const { id } = req.params;

    try {
        // ✅ Attempt to find and delete the product by its ID
        const product = await Product.findByIdAndDelete(id);

        // ✅ If product not found, return 404
        if (!product) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }

        // ✅ Return success response with deleted product data
        return res.status(200).json({ success: true, data: product });
    } catch (error) {
        console.error('Error deleting product:', error.message);
        return res.status(500).json({ success: false, message: 'Server error' });
    }
});

// ✅ Connect to DB before starting the server
const PORT = process.env.PORT || 5000;
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
});

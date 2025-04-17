import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Product from './models/product.model.js';

dotenv.config(); // ✅ Load environment variables from .env file

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
 * @route   GET /api/products
 * @desc    Fetch all products from the database
 * @access  Public
 */
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find({});
        return res.status(200).json({ success: true, data: products });
    } catch (error) {
        console.error('Error fetching products:', error.message);
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
        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }

        return res.status(200).json({ success: true, data: product });
    } catch (error) {
        console.error('Error deleting product:', error.message);
        return res.status(500).json({ success: false, message: 'Server error' });
    }
});

/**
 * @route   PATCH /api/products/:id
 * @desc    Partially update an existing product by ID
 * @access  Public
 */
app.patch('/api/products/:id', async (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    try {
        // ✅ Check if request body is not empty
        if (Object.keys(updates).length === 0) {
            return res.status(400).json({ success: false, message: 'No fields provided for update' });
        }

        // ✅ Attempt to find and update the product with only provided fields
        const updatedProduct = await Product.findByIdAndUpdate(id, updates, { new: true });

        if (!updatedProduct) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }

        // ✅ Return success response with updated product data
        return res.status(200).json({ success: true, data: updatedProduct });
    } catch (error) {
        console.error('Error updating product:', error.message);
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

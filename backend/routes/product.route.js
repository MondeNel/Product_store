import express from 'express';
import { getProducts, createProducts, deleteProducts, updateProducts } from '../controllers/product.controller.js';

const router = express.Router();

/**
 * @route   POST /api/products
 * @desc    Create a new product
 * @access  Public
 */
router.post('/', createProducts);

/**
 * @route   GET /api/products
 * @desc    Fetch all products from the database
 * @access  Public
 */
router.get('/', getProducts);

/**
 * @route   DELETE /api/products/:id
 * @desc    Delete a product by ID
 * @access  Public
 */
router.delete('/:id', deleteProducts);

/**
 * @route   PATCH /api/products/:id
 * @desc    Partially update an existing product by ID
 * @access  Public
 */
router.patch('/:id', updateProducts);

export default router;

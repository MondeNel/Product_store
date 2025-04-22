import { create } from 'zustand';

/**
 * Product store using Zustand for managing product state.
 * 
 * This store handles the following actions for products:
 * - Adding a product
 * - Removing a product by its ID
 * - Updating an existing product
 * 
 * It uses Zustand to manage state and expose actions to interact with product data.
 *
 * @module useProductStore
 * @returns {Object} The store that contains products and methods to manipulate them.
 */
export const useProductStore = create((set) => ({
    // Initial state: an empty array of products
    products: [],

    /**
     * Adds a new product to the store.
     * 
     * @param {Object} product - The product to add, must contain properties like id, name, price, etc.
     */
    addProduct: (product) => set((state) => ({
        // Adds the new product to the list of existing products
        products: [...state.products, product]
    })),

    /**
     * Removes a product from the store by its unique ID.
     * 
     * @param {string} id - The unique identifier for the product to remove.
     */
    removeProduct: (id) => set((state) => ({
        // Filters out the product with the given ID
        products: state.products.filter(product => product.id !== id)
    })),

    /**
     * Updates an existing product in the store.
     * 
     * @param {Object} updatedProduct - The product object with updated information.
     */
    updateProduct: (updatedProduct) => set((state) => ({
        // Updates the existing product with the same ID in the products array
        products: state.products.map(product =>
            product.id === updatedProduct.id ? updatedProduct : product
        )
    }))
}));

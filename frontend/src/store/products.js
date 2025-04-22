import { create } from 'zustand';

/**
 * useProductStore - Zustand store for managing product state and actions.
 *
 * Store includes:
 * - products: Array of product objects
 * - setProducts: Function to directly replace the product list
 * - createProduct: Async function to validate and post a new product to the server
 *
 * @returns {Object} Zustand state and action methods
 */
export const useProductStore = create((set) => ({
  // Array to hold all product objects
  products: [],

  /**
   * setProducts - Replaces the current product list with a new one
   * @param {Array} products - New array of products to set
   */
  setProducts: (products) => set({ products }),

  /**
   * createProduct - Creates a new product after validation and API call
   *
   * @param {Object} newProduct - Product object containing name, price, image
   * @returns {Promise<{success: boolean, message: string}>}
   */
  createProduct: async (newProduct) => {
    // Basic validation to ensure all fields are filled
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      return { success: false, message: 'Please fill all fields' };
    }

    try {
      // Send POST request to the API
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });

      // Parse the response
      const data = await res.json();

      if (res.ok) {
        // Add newly created product to local store
        set((state) => ({
          products: [...state.products, data.data],
        }));
        return { success: true, message: 'Product created successfully' };
      } else {
        return {
          success: false,
          message: data.message || 'Failed to create product',
        };
      }
    } catch (error) {
      return {
        success: false,
        message: error.message || 'An unexpected error occurred',
      };
    }
  },
}));

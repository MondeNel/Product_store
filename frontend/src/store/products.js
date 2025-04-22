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

  /**
   * fetchProducts - Fetches all products from the API and updates the store
   */

  fetchProducts: async () => {
    try {
      const res = await fetch('/api/products');
      const data = await res.json();

      if (res.ok) {
        set({ products: data.data });
      } else {
        console.error('Failed to fetch products:', data.message);
      }
    } catch (error) {
      console.error('An error occurred while fetching products:', error);
    }
  },

/**
 * Deletes a product from the server and updates the local product state.
 *
 * @async
 * @function deleteProduct
 * @param {string} productId - The unique ID of the product to be deleted.
 * @returns {Promise<Object>} A result object containing success status and message.
 *
 * @example
 * const result = await deleteProduct('123abc');
 * if (result.success) {
 *   console.log(result.message);
 * }
 */
deleteProduct: async (productId) => {
  // Send DELETE request to backend API
  const res = await fetch(`/api/products/${productId}`, {
    method: 'DELETE',
  });

  // Parse the JSON response
  const data = await res.json();

  // If deletion failed on server, return a failure message
  if (!data.success) {
    return {
      success: false,
      message: data.message || 'Failed to delete product',
    };
  }

  // Update local state: remove the deleted product from the product list
  set((state) => ({
    products: state.products.filter((product) => product._id !== productId),
  }));

  // Return success result
  return {
    success: true,
    message: 'Product deleted successfully',
  };
},

}));

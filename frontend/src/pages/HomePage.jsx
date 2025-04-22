import React, { useEffect } from 'react';
import { Container, VStack, Text, Link, SimpleGrid, useToast } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { useProductStore } from '../store/products.js';
import ProductCard from '../components/ProductCard';

/**
 * HomePage component displays the main heading and serves
 * as the landing section of the application.
 *
 * It shows a fallback message and link when no products are available.
 *
 * @component
 * @returns {JSX.Element} The HomePage component
 */
const HomePage = () => {
  const toast = useToast();
  const { fetchProducts, products, deleteProduct } = useProductStore(); // assuming deleteProduct exists in your store

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Handle delete product
  const handleDelete = async (productId) => {
    try {
      await deleteProduct(productId); // assuming deleteProduct is an async function
      toast({
        title: 'Product deleted.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Error deleting product.',
        description: error.message,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  // Handle edit product (placeholder - open modal or route)
  const handleEdit = (product) => {
    console.log('Edit clicked for:', product);
    // Add logic here: open modal, navigate to edit page, etc.
  };

  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        {/* Heading */}
        <Text
          fontSize="3xl"
          fontWeight="bold"
          bgGradient="linear(to-r, cyan.400, blue.200)"
          bgClip="text"
          textAlign="center"
        >
          Current Products 🚀
        </Text>

        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={8}
          justifyItems="center"
          w="full"
        >
          {products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              onOpen={() => handleEdit(product)}
              handleDelete={handleDelete}
            />
          ))}
        </SimpleGrid>

        {/* Fallback Message */}
        {products.length === 0 && (
          <Text fontSize="xl" textAlign="center" color="gray.500" fontWeight="bold">
            No products found 😢{' '}
            <Link as={RouterLink} to="/create">
              <Text
                as="span"
                color="blue.500"
                _hover={{ textDecoration: 'underline' }}
              >
                Create a new product
              </Text>
            </Link>
          </Text>
        )}
      </VStack>
    </Container>
  );
};

export default HomePage;

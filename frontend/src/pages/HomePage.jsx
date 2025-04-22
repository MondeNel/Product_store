import React, { useEffect } from 'react';
import { Container, VStack, Text, Link, SimpleGrid } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { useProductStore } from '../store/products';

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

    
    const { fetchProducts, products } = useProductStore();

    useEffect(() => 
    {
        // Fetch products when the component mounts
        fetchProducts();
    }, [fetchProducts]);
    console.log(products)
    

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
            w={"full"}
        >
            {products.map((product) => (
                <ProductCard key={product._id} product={product}/>
            ))}
        </SimpleGrid>



        {/* Fallback Message and Link */}
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
      </VStack>
    </Container>
  );
};

export default HomePage;

import { Box, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

/**
 * ProductCard component displays an individual product with its image, name, and price.
 *
 * @param {Object} product - Product data passed to the component.
 * @param {string} product.name - The name of the product.
 * @param {string} product.image - The URL of the product image.
 * @param {number} product.price - The price of the product.
 * @returns {JSX.Element} The ProductCard component.
 */
const ProductCard = ({ product }) => {
  return (
    <Box
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: 'translateY(-5px)', shadow: 'xl' }}
    >
      {/* Product image */}
      <Image
        src={product.image}
        alt={product.name}  
        h={48}
        w="full"
        objectFit="cover"
      />

      {/* Product details */}
      <Box p={4}>
        {/* Product name */}
        <Heading as="h3" size="md" mb={2}>
          {product.name}
        </Heading>

        {/* Product price */}
        <Text fontSize="lg" fontWeight="bold" color="gray.700">
          ${product.price.toFixed(2)} {/* Displaying the price formatted */}
        </Text>
      </Box>
    </Box>
  );
};

export default ProductCard;

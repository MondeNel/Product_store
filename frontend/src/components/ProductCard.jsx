import { Box, Heading, HStack, IconButton, Image, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';


/**
 * ProductCard component displays an individual product with its image, name, and price.
 *
 * @param {Object} product - Product data passed to the component.
 * @param {string} product.name - The name of the product.
 * @param {string} product.image - The URL of the product image.
 * @param {number} product.price - The price of the product.
 * @returns {JSX.Element} The ProductCard component.
 */
const ProductCard = ({ product, onOpen, handleDelete }) => {

    const textColor = useColorModeValue('gray.600', 'gray.200');
    const bg = useColorModeValue('white', 'gray.800');



  return (
    <Box
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: 'translateY(-5px)', shadow: 'xl' }}
      bg={bg}
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
        <Text fontSize="xl" fontWeight="bold" color={textColor} mb={4}>
          ${product.price}
        </Text>

        <HStack spacing={2}>
            <IconButton icon={<EditIcon />} onClick={onOpen} colorScheme='blue' />
            <IconButton icon={<DeleteIcon />} onClick={() => handleDelete(product._id)} colorScheme='red' />
        </HStack>
      </Box>
    </Box>
  );
};

export default ProductCard;

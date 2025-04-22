import React from 'react';
import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  useColorModeValue,
  VStack
} from '@chakra-ui/react';

import { InputGroup, InputLeftAddon } from '@chakra-ui/react';

/**
 * CreatePage component allows users to add a new product.
 *
 * It includes form fields for:
 * - Product Name
 * - Product Price
 * - Product Image URL
 *
 * Chakra UI is used for responsive layout, theming, and styling.
 *
 * @component
 * @returns {JSX.Element} The CreatePage component with a styled product form.
 */
const CreatePage = () => {
  // State to manage input values for the new product
  const [newProduct, setNewProduct] = React.useState({
    name: '',
    price: '',
    image: '',
  });

  // Placeholder function for handling product creation logic
  const handleAddProduct = () => {
    console.log("Product to add:", newProduct);
    // Here, you'd typically submit the newProduct to a backend or update app state
  };

  return (
    <Container maxW="container.sm">
      <VStack spacing={8}>
        {/* Page Heading */}
        <Heading as="h1" size="2xl" textAlign="center">
          Create New Product
        </Heading>

        {/* Form container with background and padding */}
        <Box
          w="full"
          bg={useColorModeValue('white', 'gray.800')} // Light/dark background color
          p={6}
          rounded="lg"
          shadow="lg"
        >
          {/* Form inputs */}
          <VStack spacing={4}>
            {/* Input: Product Name */}
            <Input
              placeholder="Product Name"
              name="name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            />

<InputGroup>
  <InputLeftAddon children="$" />
  <Input
    placeholder="Product Price"
    name="price"
    type="number"
    value={newProduct.price}
    onChange={(e) =>
      setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })
    }
  />
</InputGroup>


            {/* Input: Product Image URL */}
            <Input
              placeholder="Product Image URL"
              name="image"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
            />

            {/* Submit Button */}
            <Button colorScheme="blue" onClick={handleAddProduct}>
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage;

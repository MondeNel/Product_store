import React from 'react';
import {
  Container,
  VStack,
  Input,
  Button,
  Heading,
  useToast
} from '@chakra-ui/react';

/**
 * CreatePage component allows users to create a new product.
 * 
 * This form includes:
 * - Product Name (text)
 * - Product Price (number)
 * - Product Image URL (text)
 * 
 * @component
 * @returns {JSX.Element} The rendered CreatePage form
 */
const CreatePage = () => {
  const toast = useToast();

  const [newProduct, setNewProduct] = React.useState({
    name: '',
    price: 0,
    image: '',
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!newProduct.name || !newProduct.image || !newProduct.price) {
      toast({
        title: 'All fields are required.',
        status: 'warning',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    console.log('Product Created:', newProduct);

    // Reset form
    setNewProduct({ name: '', price: 0, image: '' });

    toast({
      title: 'Product created!',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.sm" py={10}>
      <VStack as="form" spacing={4} onSubmit={handleSubmit}>
        <Heading size="md">Create a New Product</Heading>
        <Input
          placeholder="Product Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <Input
          type="number"
          placeholder="Product Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })}
        />
        <Input
          placeholder="Product Image URL"
          value={newProduct.image}
          onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
        />
        <Button type="submit" colorScheme="blue" w="full">
          Create Product
        </Button>
      </VStack>
    </Container>
  );
};

export default CreatePage;

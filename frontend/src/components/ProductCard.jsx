import {
    Box,
    Heading,
    HStack,
    IconButton,
    Image,
    Text,
    useColorModeValue,
    useToast,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    VStack,
    Input,
    useDisclosure
  } from '@chakra-ui/react';
  import React, { useState } from 'react';
  import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
  import { useProductStore } from '../store/products';
  
  /**
   * ProductCard component displays an individual product with its image, name, and price.
   * Allows editing and deleting via modal and buttons.
   *
   * @param {Object} props
   * @param {Object} props.product - The product object.
   * @param {string} props.product.name - The name of the product.
   * @param {string} props.product.image - The URL of the product image.
   * @param {number} props.product.price - The price of the product.
   * @returns {JSX.Element} The ProductCard component.
   */
  const ProductCard = ({ product }) => {
    const textColor = useColorModeValue('gray.600', 'gray.200');
    const bg = useColorModeValue('white', 'gray.800');
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { deleteProduct } = useProductStore();
  
    // Local state for editing product
    const [updatedProduct, setUpdatedProduct] = useState({
      name: product.name,
      price: product.price,
      image: product.image,
    });
  
    /**
     * Deletes a product and shows toast feedback.
     *
     * @param {string} pid - The product ID.
     */
    const handleDeleteProduct = async (pid) => {
      const { success, message } = await deleteProduct(pid);
      if (success) {
        toast({
          title: 'Product deleted.',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          title: 'Error deleting product.',
          description: message,
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }
    };
  
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
          <Heading as="h3" size="md" mb={2}>
            {product.name}
          </Heading>
          <Text fontSize="xl" fontWeight="bold" color={textColor} mb={4}>
            ${product.price}
          </Text>
  
          {/* Action buttons */}
          <HStack spacing={2}>
            <IconButton
              icon={<EditIcon />}
              onClick={onOpen}
              colorScheme="blue"
              aria-label="Edit product"
            />
            <IconButton
              icon={<DeleteIcon />}
              onClick={() => handleDeleteProduct(product._id)}
              colorScheme="red"
              aria-label="Delete product"
            />
          </HStack>
  
          {/* Edit Modal */}
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Update Product</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <VStack spacing={4}>
                  <Input
                    placeholder="Product Name"
                    name="name"
                    value={updatedProduct.name}
                    onChange={(e) =>
                      setUpdatedProduct({ ...updatedProduct, name: e.target.value })
                    }
                  />
                  <Input
                    placeholder="Product Price"
                    name="price"
                    type="number"
                    value={updatedProduct.price}
                    onChange={(e) =>
                      setUpdatedProduct({ ...updatedProduct, price: e.target.value })
                    }
                  />
                  <Input
                    placeholder="Product Image"
                    name="image"
                    value={updatedProduct.image}
                    onChange={(e) =>
                      setUpdatedProduct({ ...updatedProduct, image: e.target.value })
                    }
                  />
                </VStack>
              </ModalBody>
            </ModalContent>
          </Modal>
        </Box>
      </Box>
    );
  };
  
  export default ProductCard;
  
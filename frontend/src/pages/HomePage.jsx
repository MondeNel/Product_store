import React from 'react';
import { Container, VStack, Text, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

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

import React from 'react';
import { Container, VStack, Text } from '@chakra-ui/react';

/**
 * HomePage component displays the main heading and serves
 * as the landing section of the application.
 *
 * @component
 * @returns {JSX.Element} The HomePage component
 */
const HomePage = () => {
  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Text
          fontSize="3xl"
          fontWeight="bold"
          bgGradient="linear(to-r, cyan.400, blue.200)"
          bgClip="text"
          textAlign="center"
        >
          Current Products 🚀
        </Text>
      </VStack>
    </Container>
  );
};

export default HomePage;

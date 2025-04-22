import React from 'react';
import { Container, Flex, Text, Button, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BsPlusSquare } from 'react-icons/bs';

/**
 * Navbar component for the Product Store app.
 * 
 * This component displays the top navigation bar, including:
 * - A gradient title linking to the home page
 * - A "Create" button with an icon
 * - Responsive layout using Chakra UI's Flexbox utilities
 * 
 * @component
 * @returns {JSX.Element} The rendered Navbar
 */
const Navbar = () => {
  return (
    <Container maxW="1140px" px={4}>
      {/* Flex container to align and space content */}
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        flexDir={{ base: 'column', sm: 'row' }}
      >
        {/* Gradient-styled text for site title */}
        <Text
          fontSize={{ base: '22px', sm: '28px' }}
          fontWeight="bold"
          textTransform="uppercase"
          textAlign="center"
          bgGradient="linear(to-r, cyan.400, blue.500)"
          bgClip="text"
        >
          <Link to="/">Product Store 🛒</Link>
        </Text>

        {/* HStack for horizontal button layout */}
        <HStack spacing={2} alignItems="center">
          <Link to="/create">
            <Button>
              <BsPlusSquare fontSize={20} />
            </Button>
          </Link>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;

import React from 'react';
import { Container, Flex,Text, Button, HStack, useColorMode} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BsPlusSquare } from 'react-icons/bs';
import { IoMoon } from 'react-icons/io5';
import { LuSun } from 'react-icons/lu';

/**
 * Navbar component for the Product Store app.
 *
 * Displays the navigation bar with:
 * - A gradient-styled site title that links to the homepage
 * - A "Create Product" button with a plus-square icon
 * - A light/dark mode toggle button
 * - Responsive layout using Chakra UI Flex and HStack
 *
 * @component
 * @returns {JSX.Element} The rendered Navbar component
 */
const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode(); // Chakra hook to toggle light/dark theme

  return (
    <Container maxW="1140px" px={4}>
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        flexDir={{ base: 'column', sm: 'row' }} // Stack on small screens
      >
        {/* Brand / Logo Section */}
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

        {/* Action Buttons: Add Product + Toggle Theme */}
        <HStack spacing={2} alignItems="center">
          <Link to="/create">
            <Button title="Add Product" aria-label="Add Product">
              <BsPlusSquare fontSize={20} />
            </Button>
          </Link>

          <Button onClick={toggleColorMode} title="Toggle Theme" aria-label="Toggle Theme">
            {colorMode === 'light' ? <IoMoon size={20} /> : <LuSun size={20} />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;

import React from 'react';
import {
  Box,
  Button,
  Flex,
  Spacer,
  Center,
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { Link as RouteLink } from 'react-router-dom';
import ColorModeSwitcher from './ColorModeSwitcher';
import Logo from './Logo';

const PageBase: React.FC = ({ children }) => (
  <ChakraProvider theme={theme}>
    <Box textAlign="left" fontSize="l" p={4}>
      <Flex>
        <Logo
          h="8vmin"
          pointerEvents="none"
        />
        <Spacer />
        <Center>
          <Button mr={4} bg="transparent">
            Projects
          </Button>
          <Button mr={4} bg="transparent">
            Experience
          </Button>
          <Button mr={4} bg="transparent">
            <RouteLink to="/blog">
              Blog
            </RouteLink>
          </Button>
          <Button mr={4} bg="transparent">
            <RouteLink to="/login">
              Login
            </RouteLink>
          </Button>
          <ColorModeSwitcher mr={4} />
        </Center>
      </Flex>
      {children}
    </Box>
  </ChakraProvider>
);

export default PageBase;

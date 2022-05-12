import React from 'react';
import {
  Box,
  Button,
  Flex,
  Spacer,
  Center,
  ChakraProvider,
} from '@chakra-ui/react';
import { Link as RouteLink } from 'react-router-dom';
import ColorModeSwitcher from './ColorModeSwitcher';
import Logo from './Logo';
import customTheme from '../themes/theme';

const PageBase: React.FC = ({ children }) => (
  <ChakraProvider theme={customTheme}>
    <Box textAlign="left" fontSize="l" py={4} px={8}>
      <Flex>
        <RouteLink to="/">
          <Logo
            h="8vmin"
            pointerEvents="none"
          />
        </RouteLink>
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

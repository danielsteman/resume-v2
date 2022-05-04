import React from 'react';
import {
  Box,
  Grid,
  GridItem,
  Button,
  Flex,
  Spacer,
  Center,
} from '@chakra-ui/react';
import { Link as RouteLink } from 'react-router-dom';
import ColorModeSwitcher from './ColorModeSwitcher';
import Logo from './Logo';

const Base = () => (
  <Box textAlign="left" fontSize="l">
    <Grid
      p={4}
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(2, 1fr)"
    >
      <GridItem colSpan={2} bg="transparent">
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
      </GridItem>
    </Grid>
  </Box>
);

export default Base;

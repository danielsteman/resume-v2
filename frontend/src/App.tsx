import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  GridItem,
  Button,
  Flex,
  Spacer,
  Center,
  VStack,
  Text,
  Heading,
} from '@chakra-ui/react';
import { Link as RouteLink } from 'react-router-dom';
import ColorModeSwitcher from './components/ColorModeSwitcher';
import Logo from './components/Logo';

const App = () => (
  <ChakraProvider theme={theme}>
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
                Login
              </Button>
              <ColorModeSwitcher mr={4} />
            </Center>
          </Flex>
        </GridItem>
        <GridItem colSpan={2} bg="lightblue">
          <VStack alignItems="left">
            <Heading>
              Lorem ipsum
            </Heading>
            <Heading size="4xl">
              Lorem ipsum
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ratione labore amet qui, cumque similique consequatur inventore aliquid modi tempora libero cupiditate quis vel esse veritatis molestias aperiam impedit earum?
            </Text>
          </VStack>
        </GridItem>
        <GridItem bg="tomato">
          <Heading>
            About me
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium minima reiciendis odit quidem dolor quod quo accusantium voluptatem excepturi alias eaque at aperiam sequi, repellat dolore iste saepe inventore sunt?
          </Text>
        </GridItem>
        <GridItem>
          <Center>
            Picture placeholder
          </Center>
        </GridItem>
        <GridItem colSpan={2} bg="turquoise">
          <Heading>
            Experience
          </Heading>
          <VStack alignItems="left" pt={4} pb={4}>
            <Heading size="l">
              Experience 1
            </Heading>
            <Heading size="l">
              Experience 2
            </Heading>
            <Heading size="l">
              Experience 3
            </Heading>
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  </ChakraProvider>
);

export default App;

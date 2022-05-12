import React from 'react';
import {
  Box,
  Grid,
  GridItem,
  Center,
  VStack,
  Text,
  Heading,
} from '@chakra-ui/react';
import ExperienceBlock from './components/ExperienceBlock';
import Projects from './components/Projects';
import PageBase from './components/PageBase';

const App = () => (
  <PageBase>
    <Box textAlign="left" fontSize="l" px="8em" py="5em">
      <Grid
        gap="1em"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(2, 1fr)"
      >
        <GridItem colSpan={2} bg="lightblue">
          <VStack alignItems="left">
            <Heading size="lg">
              Hi there, I&apos;m
            </Heading>
            <Heading size="xl">
              Daniel Steman.
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ratione labore amet qui, cumque similique consequatur inventore aliquid modi tempora libero cupiditate quis vel esse veritatis molestias aperiam impedit earum?
            </Text>
          </VStack>
        </GridItem>
        <GridItem bg="tomato">
          <Heading size="lg">
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
        <GridItem colSpan={2} bg="lightblue">
          <Heading size="lg">
            Experience
          </Heading>
        </GridItem>
        <GridItem bg="lightgreen">
          <ExperienceBlock title="experience 1" description="Lorem bla die bla" from="January 2021" to="February 2021" />
        </GridItem>
        <GridItem bg="lightgrey">
          <ExperienceBlock title="experience 2" description="Lorem bla die bla" from="January 2022" to="February 2022" />
        </GridItem>
        <GridItem colSpan={2} bg="turquoise">
          <Projects sectionTitle="Projects" entries={[]} />
        </GridItem>
      </Grid>
    </Box>
  </PageBase>
);

export default App;

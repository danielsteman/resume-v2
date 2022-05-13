import React from 'react';
import {
  Box, Grid, GridItem, Heading, Text,
} from '@chakra-ui/react';
import PageBase from '../components/PageBase';

const BlogPost = () => (
  <GridItem colSpan={1} bg="lightblue" p={4} rounded={8}>
    <Heading size="lg">
      Blog title 1
    </Heading>
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur tempore voluptates delectus perspiciatis, cumque nisi illo eligendi repudiandae, alias suscipit officia. Id soluta ad harum, maiores alias quod debitis velit.
    </Text>
    <Box h={50} p={16}>
      Picture placeholder
    </Box>
  </GridItem>
);

const Blog = () => (
  <PageBase>
    <Box textAlign="left" fontSize="l" px="8em" py="5em">
      <Grid
        gap="1em"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(2, 1fr)"
      >
        <BlogPost />
        <BlogPost />
      </Grid>
    </Box>
  </PageBase>
);

export default Blog;

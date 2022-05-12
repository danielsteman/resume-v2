import React from 'react';
import { Link as RouteLink } from 'react-router-dom';
import {
  Text,
  Box,
  Heading,
  Center,
  VStack,
  Input,
  Button,
} from '@chakra-ui/react';
import PageBase from '../components/PageBase';

const Login = () => (
  <PageBase>
    <Center display="flex" mt="9em">
      <Box
        textAlign="center"
        fontSize="l"
        p={4}
        bgColor="#F7FAFC"
        minW="30em"
        rounded="xl"
      >
        <VStack p={4}>
          <Heading size="lg" mb="1em">Log in to your account</Heading>
          <Text>
            Don&apos;t have an account?
            {' '}
            <RouteLink
              to="/signup"
            >
              Sign up
            </RouteLink>
          </Text>
        </VStack>
        <Center>
          <Box textAlign="left">
            <VStack alignItems="left">
              <Input bgColor="#EDF2F7" border={0} defaultValue="Email" minW="15em" />
              <Input bgColor="#EDF2F7" border={0} defaultValue="Password" />
              <Button colorScheme="blue">Submit</Button>
            </VStack>
          </Box>
        </Center>
      </Box>
    </Center>
  </PageBase>
);

export default Login;

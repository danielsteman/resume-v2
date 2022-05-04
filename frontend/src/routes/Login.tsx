import React from 'react';
import { Link as RouteLink } from 'react-router-dom';
import {
  Text,
  Box,
  Heading,
  Center,
  VStack,
  Input,
} from '@chakra-ui/react';
import Logo from '../components/Logo';
import PageBase from '../components/PageBase';

const Login = () => (
  <PageBase>
    <Box textAlign="center" fontSize="l" p={8}>
      <Center>
        <Logo
          h="8vmin"
          pointerEvents="none"
        />
      </Center>
      <Heading>Log in to your account</Heading>
      <Text>
        Don&apos;t have an account?
        {' '}
        <RouteLink to="/signup">
          Sign up
        </RouteLink>
      </Text>
      <Center>
        <Box textAlign="left" w="30%" p={8}>
          <VStack alignItems="left">
            <Text>Email</Text>
            <Input />
            <Text>Password</Text>
            <Input />
          </VStack>
        </Box>
      </Center>
    </Box>
  </PageBase>
);

export default Login;

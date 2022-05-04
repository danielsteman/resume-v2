import { Heading, VStack, Text } from '@chakra-ui/react';
import React from 'react';

interface Props {
  title: string
  description: string
  from: string
  to: string
}

const ExperienceBlock: React.FC<Props> = ({
  title, description, from, to,
}) => (
  <VStack alignItems="left" pt={4} pb={4}>
    <Heading size="xl">
      {title}
    </Heading>
    <Heading size="m">
      {from}
      {' '}
      -
      {' '}
      {to}
    </Heading>
    <Text>
      {description}
    </Text>
  </VStack>
);

export default ExperienceBlock;

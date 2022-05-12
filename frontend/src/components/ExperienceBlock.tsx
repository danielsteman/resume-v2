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
    <Heading size="md">
      {title}
    </Heading>
    <Heading size="s">
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

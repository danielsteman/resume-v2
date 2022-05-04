import {
  Heading, HStack, Text, VStack,
} from '@chakra-ui/react';
import React from 'react';

export interface ProjectBlockProps {
  title: string
  description: string
  tags: Array<string>
}

const ProjectBlock: React.FC<ProjectBlockProps> = ({ title, description, tags }) => (
  <VStack alignItems="left" pt={4} pb={4}>
    <Heading size="l">
      {title}
    </Heading>
    <Text>
      {description}
    </Text>
    <HStack>
      {tags.map((tag) => <div>{tag}</div>)}
    </HStack>
  </VStack>
);

export default ProjectBlock;

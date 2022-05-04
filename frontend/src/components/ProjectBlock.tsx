import {
  Heading, HStack, Image, Text, VStack,
} from '@chakra-ui/react';
import React from 'react';

export interface ProjectBlockProps {
  image: string
  title: string
  description: string
  tags: Array<string>
}

const ProjectBlock: React.FC<ProjectBlockProps> = ({
  title, description, tags, image,
}) => (
  <VStack alignItems="left" pt={4} pb={4}>
    <Image src={image} />
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

import { Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import ProjectBlock, { ProjectBlockProps } from './ProjectBlock';

interface ProjectProps {
  sectionTitle: string
  entries: Array<ProjectBlockProps>
}

const Projects: React.FC<ProjectProps> = (sectionTitle, entries) => (
  <div>
    <Heading size="l">
      {sectionTitle}
    </Heading>
    <VStack alignItems="left" pt={4} pb={4}>
      {entries.map((entry: ProjectBlockProps) => {
        const { title, description, tags } = entry;
        return (
          <ProjectBlock
            title={title}
            description={description}
            tags={tags}
          />
        );
      })}
    </VStack>
  </div>
);

export default Projects;

import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { GetStaticProps } from 'next';

import { Title, Container, Text, Button, Grid, Link, List } from '@components';
import { getPosts, Post } from '@posts';

interface ProjectProps {
  projects: Post[];
}

const ProjectImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 4px;
  transition: 0.2s ease-in-out 0s;

  :hover {
    transform: scale(1.02);
  }
`;

const ProjectContainer = styled(Container)`
  :hover > * img {
    transform: scale(1.03);
  }
`;

const ProjectTag = styled.li`
  color: rgb(105, 105, 105);
  font-size: 13px;
  letter-spacing: 0.03em;
`;

const ProjectButton = styled(Button)`
  padding: 12px 30px;
`;

const Projects = ({ projects }: ProjectProps): JSX.Element => (
  <Container marginBottom="5rem">
    <Head>
      <title>Projects</title>
    </Head>
    <Container alignItems="center">
      <Title>Projects</Title>
      <Text textAlign="center">
        I&apos;m always working on new projects. <br />
        You can find them on my&nbsp;
        <a href="https://github.com/Coreeze">Github</a>.
      </Text>
    </Container>
  </Container>
);

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getPosts('projects');

  return {
    props: {
      projects,
    },
  };
};

export default Projects;

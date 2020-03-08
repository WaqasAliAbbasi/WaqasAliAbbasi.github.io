import React from "react";

import { SEO, Layout, InternalLink } from "../components";
import { Text, Box } from "@chakra-ui/core";
import { graphql } from "gatsby";

interface ProjectData {
  title: string;
  path: string;
  description: string;
}
const Project: React.FC<ProjectData> = ({ title, path, description }) => (
  <Box>
    <InternalLink to={path}>
      <Text>{title}</Text>
      <Text>{description}</Text>
    </InternalLink>
  </Box>
);

const Projects: React.FC<any> = ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => {
  const projects = edges.map(
    ({ node: { frontmatter } }: any) => frontmatter
  ) as ProjectData[];
  return (
    <Layout>
      <SEO title="Projects" />
      {projects.map(({ path, title, description }, key) => (
        <Project
          key={key}
          title={title}
          path={path}
          description={description}
        />
      ))}
    </Layout>
  );
};

export const projectsQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/src/projects/" } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            path
            title
            description
          }
        }
      }
    }
  }
`;

export default Projects;

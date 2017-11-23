import gql from 'graphql-tag';

export const projectsQuery = gql`
  query {
    projects {
      title
      _id
    }
  }
`;

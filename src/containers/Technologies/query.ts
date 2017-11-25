import gql from 'graphql-tag';

export const technologiesQuery = gql`
  query {
    technologies {
      title
      _id
    }
  }
`;

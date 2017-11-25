import gql from 'graphql-tag';

export const descriptionsQuery = gql`
  query {
    descriptions {
      title
      _id
      description
      icon
    }
  }
`;

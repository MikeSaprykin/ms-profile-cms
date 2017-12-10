import gql from 'graphql-tag';

export const descriptionsQuery = gql`
  query descriptions($id: String) {
    descriptions(id: $id) {
      title
      _id
      description
      icon
    }
  }
`;

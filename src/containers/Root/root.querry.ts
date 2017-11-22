import gql from 'graphql-tag';

export const TodosQuerry = gql`
  query {
    descriptions {
      title
      description
      icon
      _id
    }
    technologies {
      title
      _id
    }
  }
`;

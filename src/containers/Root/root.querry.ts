import gql from 'graphql-tag';

export const TodosQuerry = gql`
  query {
    todos {
      title
      description
      done
      _id
    }
  }
`;

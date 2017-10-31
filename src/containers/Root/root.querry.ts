import gql from 'graphql-tag';

export const TodosQuerry = gql`
  query getTodos($done: Int!) {
    todos(done: $done) {
      title
      done
      _id
    }
  }
`;

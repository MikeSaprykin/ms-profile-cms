import gql from 'graphql-tag';

export const ToggleTodoDone = gql`
  mutation toggleTodo($id: String!, $done: Boolean!) {
    toggleDone(id: $id, done: $done) {
      title
      description
      done
      _id
    }
  }
`;

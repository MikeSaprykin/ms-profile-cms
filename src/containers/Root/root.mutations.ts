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

export const AddTodo = gql`
  mutation addTodo($title: String!) {
    addTodo(title: $title) {
      title
      description
      done
      _id
    }
  }
`;

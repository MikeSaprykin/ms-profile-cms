import gql from 'graphql-tag';

export const deleteDescriptionMutation = gql`
  mutation deleteDescription($id: String!) {
    deleteDescription(id: $id) {
      title
      _id
      description
      icon
    }
  }
`;

export const addDescriptionMutation = gql`
  mutation addDescription(
    $title: String!
    $description: String!
    $icon: String!
  ) {
    addDescription(title: $title, description: $description, icon: $icon) {
      title
      _id
      description
      icon
    }
  }
`;

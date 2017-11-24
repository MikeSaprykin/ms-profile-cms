import gql from 'graphql-tag';

export const deleteDescriptionMutation = gql`
    mutation deleteDescription ($id: String!){
        deleteDescription(id: $id) {
            title
            _id
            description
            icon
        }
    }
`;
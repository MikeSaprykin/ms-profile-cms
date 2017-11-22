import gql from 'graphql-tag';

export const categoriesQuery = gql`
    query {
        categories {
            title
            _id
        }
    }
`;

import * as React from 'react';
import { graphql, QueryProps } from 'react-apollo';
import { categoriesQuery } from './query';
import Loader from '../../components/Loader';

import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  height: 400px;
  width: 400px;
`;

interface CategoriesData extends QueryProps {
    categories: Array<any>;
}

export interface CategoriesPropTypes {
    data: CategoriesData;
}

export class Categories extends React.Component<CategoriesPropTypes> {

    renderCategories(category: any, i: number) {
        return <p key={i}>{category.title}</p>;
    }

    render() {
        const { data: { loading, categories }} = this.props;
        return (
            <Container>
                {loading ? <Loader /> : null}
                <h1>Categories</h1>
                {categories ? categories.map(this.renderCategories) : null}
            </Container>
        );
    }
}
export default graphql(categoriesQuery)(Categories);

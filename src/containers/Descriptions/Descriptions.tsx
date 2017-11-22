import * as React from 'react';
import { graphql, QueryProps } from 'react-apollo';
import { descriptionsQuery } from './query';
import Loader from '../../components/Loader';

import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  height: 400px;
  width: 400px;
`;

interface DescriptionsData extends QueryProps {
    descriptions: Array<any>;
}

export interface DescriptionsPropTypes {
    data: DescriptionsData;
}

export class Descriptions extends React.Component<DescriptionsPropTypes> {

    renderDescription(description: any, i: number) {
        return <p key={i}>{description.title}</p>;
    }

    render() {
        const { data: { loading, descriptions }} = this.props;
        return (
            <Container>
                {loading ? <Loader /> : null}
                <h1>Descriptions</h1>
                {descriptions ? descriptions.map(this.renderDescription) : null}
            </Container>
        );
    }
}
export default graphql(descriptionsQuery)(Descriptions);

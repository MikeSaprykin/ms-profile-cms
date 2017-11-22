import * as React from 'react';
import { graphql, QueryProps } from 'react-apollo';
import { technologiesQuery } from './query';
import Loader from '../../components/Loader';

import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  height: 400px;
  width: 400px;
`;

interface TechnologiesData extends QueryProps {
    technologies: Array<any>;
}

export interface TechnologiesPropTypes {
    data: TechnologiesData;
}

export class Technologies extends React.Component<TechnologiesPropTypes> {

    renderTechnologies(technologies: any, i: number) {
        return <p key={i}>{technologies.title}</p>;
    }

    render() {
        const { data: { loading, technologies }} = this.props;
        return (
            <Container>
                {loading ? <Loader /> : null}
                <h1>Technologies</h1>
                {technologies ? technologies.map(this.renderTechnologies) : null}
            </Container>
        );
    }
}
export default graphql(technologiesQuery)(Technologies);

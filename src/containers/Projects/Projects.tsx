import * as React from 'react';
import { graphql, QueryProps } from 'react-apollo';
import { projectsQuery } from './query';
import Loader from '../../components/Loader';

import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  height: 400px;
  width: 400px;
`;

interface ProjectsData extends QueryProps {
    projects: Array<any>;
}

export interface ProjectsPropTypes {
    data: ProjectsData;
}

export class Projects extends React.Component<ProjectsPropTypes> {

    renderProjects(project: any, i: number) {
        return <p key={i}>{project.title}</p>;
    }

    render() {
        const { data: { loading, projects }} = this.props;
        return (
            <Container>
                {loading ? <Loader /> : null}
                <h1>Projects</h1>
                {projects ? projects.map(this.renderProjects) : null}
            </Container>
        );
    }
}
export default graphql(projectsQuery)(Projects);

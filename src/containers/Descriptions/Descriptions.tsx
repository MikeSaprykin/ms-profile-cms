import * as React from 'react';
import { graphql, QueryProps } from 'react-apollo';
import { descriptionsQuery } from './query';
import Loader from '../../components/Loader';
import { CardHeader } from '../../components/Card';
import Button from '../../components/Button';

import styled from 'styled-components';

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ButtonContent = styled.span`
  i {
    margin-right: .5rem;
  }

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
            <div>
                {loading ? <Loader /> : null}
                <CardHeader>
                    <HeaderContent>
                        <h3>Descriptions</h3>
                        <Button>
                            <ButtonContent>
                                <i className='fa fa-plus' />
                                Add new description
                            </ButtonContent>
                        </Button>
                    </HeaderContent>
                </CardHeader>
                {descriptions ? descriptions.map(this.renderDescription) : null}
            </div>
        );
    }
}
export default graphql(descriptionsQuery)(Descriptions);

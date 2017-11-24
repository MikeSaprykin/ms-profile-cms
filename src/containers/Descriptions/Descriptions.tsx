import * as React from 'react';
import { graphql, QueryProps } from 'react-apollo';
import { connect, DispatchProp } from 'react-redux';
import { descriptionsQuery } from './query';
import { CardHeader } from '../../components/Card';
import Button from '../../components/Button';

import { HeaderContent, ButtonContent } from './styles';
import { DescriptionsState } from '../../store';
import { setDescriptions } from '../../store/descriptions/actions/descriptions.actions';

import DescriptionsList from './DescriptionsList';

interface DescriptionsData extends QueryProps {
    descriptions: Array<any>;
}

export interface DescriptionsPropTypes extends DispatchProp<DescriptionsState> {
    data: DescriptionsData;
    setDescriptions: any;
}

export class Descriptions extends React.Component<DescriptionsPropTypes> {

    componentWillReceiveProps(nextProps: DescriptionsPropTypes) {
        this.props.setDescriptions(nextProps.data.descriptions);
    }

    render() {
        const { data: { loading }} = this.props;
        return (
            <div>
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
                <DescriptionsList loading={loading} />
            </div>
        );
    }
}
export default connect<any>(null, { setDescriptions })(graphql(descriptionsQuery)(Descriptions));

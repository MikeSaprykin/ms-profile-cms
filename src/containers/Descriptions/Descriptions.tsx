import * as React from 'react';
import { graphql, QueryProps } from 'react-apollo';
import { connect, DispatchProp } from 'react-redux';

import { isEqual } from 'lodash';

import { descriptionsQuery } from './query';
import { CardHeader } from '../../components/Card';
import { Button } from '../../components/Button';
import DeleteDescriptionModal from '../../components/DeleteDescriptionModal';

import { HeaderContent, ButtonContent } from './styles';
import {
    DescriptionsState,
    selectDeleteModal,
    setDescriptions,
    hideDeleteModal,
    confirmDeleteDescription,
    State
} from '../../store';

import DescriptionsList from './DescriptionsList';

interface DescriptionsData extends QueryProps {
    descriptions: Array<any>;
}

export interface DescriptionsPropTypes extends DispatchProp<DescriptionsState> {
    data: DescriptionsData;
    setDescriptions: any;
    hideDeleteModal: any;
    confirmDeleteDescription: any;
    deleteModal: boolean;
}

export class Descriptions extends React.Component<DescriptionsPropTypes, any> {

    componentWillReceiveProps(nextProps: DescriptionsPropTypes) {
        if (!isEqual(nextProps.data.descriptions, this.props.data.descriptions)) {
            this.props.setDescriptions(nextProps.data.descriptions);
        }
    }

    render() {
        const {
            data: { loading },
            deleteModal,
            confirmDeleteDescription,
            hideDeleteModal
        } = this.props;
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
                <DeleteDescriptionModal
                    visible={deleteModal}
                    onClose={() => hideDeleteModal()}
                    onDeleteConfirm={() => confirmDeleteDescription()}
                />
            </div>
        );
    }
}

const mapStateToProps = (state: State) => ({
   deleteModal: selectDeleteModal(state)
});
export default connect<any>(
    mapStateToProps,
    {
        setDescriptions,
        hideDeleteModal,
        confirmDeleteDescription
    }
)(
    graphql(descriptionsQuery)(Descriptions)
);

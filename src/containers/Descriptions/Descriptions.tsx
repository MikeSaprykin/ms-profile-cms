import * as React from 'react';
import { graphql, QueryProps } from 'react-apollo';
import { connect, DispatchProp } from 'react-redux';

import { isEqual } from 'lodash';

import { descriptionsQuery } from './query';
import { CardHeader } from '../../components/Card';
import { ButtonLink } from '../../components/Button';
import DeleteDescriptionModal from '../../components/DeleteDescriptionModal';

import { HeaderContent, ButtonLinkContent, DescriptionsSubHeader } from './styles';
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

export class DescriptionsComponent extends React.Component<DescriptionsPropTypes, any> {

    componentWillReceiveProps(nextProps: DescriptionsPropTypes) {
        if (!isEqual(nextProps.data.descriptions.length, this.props.data.descriptions)) {
            this.props.setDescriptions(nextProps.data.descriptions);
        }
    }

    componentWillMount() {
        const { setDescriptions, data: { descriptions }} = this.props;
        if (descriptions) {
            setDescriptions(descriptions);
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
                        <ButtonLink>
                            <ButtonLinkContent to='/descriptions/add'>
                                <i className='fa fa-plus' />
                                Add new description
                            </ButtonLinkContent>
                        </ButtonLink>
                    </HeaderContent>
                    <DescriptionsSubHeader>
                        Blocks with title, description and an icon. Icon is just a string, representing font awesome
                        or simple line icons icon class.
                    </DescriptionsSubHeader>
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
export const Descriptions = connect<any>(
    mapStateToProps,
    {
        setDescriptions,
        hideDeleteModal,
        confirmDeleteDescription
    }
)(
    graphql(descriptionsQuery)(DescriptionsComponent)
);

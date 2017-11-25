import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { map } from 'lodash';

import { DescriptionsListWrapper } from './styles';

import Description from '../../components/Description';
import Loader from '../../components/Loader';
import {
    DescriptionModel,
    toggleDescriptionExpanded,
    openDeleteModal,
    selectDescriptions,
    State
} from '../../store';

interface DescriptionsListProps extends DispatchProp<State> {
    loading: boolean;
    descriptions?: Array<DescriptionModel>;
    openDeleteModal?: any;
    toggleDescriptionExpanded?: any;
}

class DescriptionsList extends React.Component<DescriptionsListProps> {

    onEdit(id: any) {
        console.log('iD');
    }

    onExpand(id: any) {
        this.props.toggleDescriptionExpanded(id);
    }

    onDelete(id: any) {
        this.props.openDeleteModal(id);
    }

    renderDescription() {
        const { descriptions } = this.props;
        return descriptions ?
            map(descriptions, description => (
            <Description
                key={description._id}
                description={description}
                actions={
                    {
                        onEdit: id => this.onEdit(id),
                        onExpand: id => this.onExpand(id),
                        onDelete: id => this.onDelete(id)
                    }
                }
            />
            )) : null;
    }

    render() {
        return (
            <DescriptionsListWrapper>
                {this.props.loading ? <Loader /> : null}
                {this.renderDescription()}
            </DescriptionsListWrapper>
        );
    }
}

const mapStateToProps = (state: State) => ({
    descriptions: selectDescriptions(state)
});

export default connect<any>(
    mapStateToProps,
    {
        toggleDescriptionExpanded,
        openDeleteModal
    })(DescriptionsList);

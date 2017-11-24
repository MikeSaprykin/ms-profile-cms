import * as React from 'react';
import { graphql, QueryProps } from 'react-apollo';
import { connect, DispatchProp } from 'react-redux';
import { descriptionsQuery } from './query';
import { CardHeader } from '../../components/Card';
import Button from '../../components/Button';
import Modal from '../../components/Modal';

import { HeaderContent, ButtonContent } from './styles';
import { State } from '../../root';
import { DescriptionsState, selectDeleteModal, setDescriptions, hideDeleteModal } from '../../store';

import DescriptionsList from './DescriptionsList';

interface DescriptionsData extends QueryProps {
    descriptions: Array<any>;
}

export interface DescriptionsPropTypes extends DispatchProp<DescriptionsState> {
    data: DescriptionsData;
    setDescriptions: any;
    hideDeleteModal: any;
    deleteModal: boolean;
}

export class Descriptions extends React.Component<DescriptionsPropTypes, any> {

    componentWillReceiveProps(nextProps: DescriptionsPropTypes) {
        this.props.setDescriptions(nextProps.data.descriptions);
    }

    handleClose() {
        this.props.hideDeleteModal();
    }

    render() {
        const { data: { loading }, deleteModal } = this.props;
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
                <Modal
                    visible={deleteModal}
                    onOverlayClick={() => this.handleClose()}
                >
                    Oppa Oppa
                </Modal>
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
        hideDeleteModal
    }
)(
    graphql(descriptionsQuery)(Descriptions)
);

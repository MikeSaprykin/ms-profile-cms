import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import {
    State,
    selectLoading,
    selectSelectedDescription,
    selectDescriptionForEdit,
    editDescription
} from '../../store';
import { CardBoxHeader } from '../../components/Card';
import { ButtonLink } from '../../components/Button';
import {
    AddDescriptionContent,
    AddDescriptionFormWrapper,
    AddDescriptionTitle,
    ButtonLinkContent
} from './styles';
import { AddDescriptionFormContainer } from './AddDescriptionForm';
import Loader from '../../components/Loader';

interface EditDescriptionProps extends DispatchProp<State>, RouteComponentProps<{ id: string }> {
    initialValues: any;
    loading: boolean;
    selectDescriptionForEdit: any;
    editDescription: any;
}

export class EditDescriptionComponent extends React.Component<EditDescriptionProps> {

    componentWillMount() {
        const {
            initialValues,
            match: { params: { id } },
            selectDescriptionForEdit
        } = this.props;
        if (!initialValues.id) {
            selectDescriptionForEdit(id);
        }
    }

    render() {
        const { loading, initialValues, editDescription } = this.props;
        return (
            <div>
                {loading ? <Loader /> : null}
                <CardBoxHeader>
                    <AddDescriptionContent>
                        <ButtonLink>
                            <ButtonLinkContent to='/descriptions'>
                                <i className='fa fa-arrow-left'/>
                                Back
                            </ButtonLinkContent>
                        </ButtonLink>
                        <AddDescriptionTitle>
                            Edit description
                        </AddDescriptionTitle>
                    </AddDescriptionContent>
                </CardBoxHeader>
                <AddDescriptionFormWrapper>
                    <AddDescriptionFormContainer
                        initialValues={initialValues}
                        onSubmit={value => editDescription(value)}
                    >
                        Edit Description
                    </AddDescriptionFormContainer>
                </AddDescriptionFormWrapper>
            </div>
        );
    }

}

const mapStateToProps = (state: State) => ({
    initialValues: {
        ...selectSelectedDescription(state)
    },
    loading: selectLoading(state)
});
export const EditDescription = connect(
    mapStateToProps,
    {
        selectDescriptionForEdit,
        editDescription
    })(EditDescriptionComponent);

import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';

import { CardBoxHeader } from '../../components/Card';
import { ButtonLink } from '../../components/Button';
import Loader from '../../components/Loader';
import { AddDescriptionFormContainer } from './AddDescriptionForm';
import {
    ButtonLinkContent,
    AddDescriptionContent,
    AddDescriptionTitle,
    AddDescriptionFormWrapper
} from './styles';
import { addDescription, State, selectLoading } from '../../store';

interface AddDescriptionProps extends DispatchProp<State> {
    loading: boolean;
    addDescription: any;
}

export class AddDescriptionComponent extends React.Component<AddDescriptionProps> {

    render() {
        const { addDescription, loading } = this.props;
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
                            Add description
                        </AddDescriptionTitle>
                    </AddDescriptionContent>
                </CardBoxHeader>
                <AddDescriptionFormWrapper>
                    <AddDescriptionFormContainer
                        onSubmit={value => addDescription(value)}
                    />
                </AddDescriptionFormWrapper>
            </div>
        );
    }
}

const mapStateToProps = (state: State) => ({
   loading: selectLoading(state)
});

export const AddDescription = connect(mapStateToProps, { addDescription })(AddDescriptionComponent);

import * as React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import InputGroup from '../../components/InputGroup';
import TextArea from '../../components/TextArea';
import { AddDescriptionSubmit } from './styles';
import { required } from '../../helpers';

interface AddDescriptionFormProps extends InjectedFormProps {
}

class AddDescriptionForm extends React.Component<AddDescriptionFormProps> {

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <InputGroup
                    name='title'
                    label='Title for description block'
                    placeholder='Your awesome title'
                    validators={[required]}
                />
                <InputGroup
                    name='icon'
                    label='Icon for description block'
                    placeholder='fa fa-success fa-2x'
                    helperText='You can use any simple line icons classes or font awesome classes'
                    validators={[required]}
                />
                <TextArea
                    name='description'
                    label='Description of the block'
                    placeholder='Your awesome description goes here...'
                    validators={[required]}
                />
                <AddDescriptionSubmit type='submit'>
                    Add Description
                </AddDescriptionSubmit>
            </form>
        );
    }
}

export const AddDescriptionFormContainer = reduxForm({
    form: 'addDescription'
})(AddDescriptionForm);

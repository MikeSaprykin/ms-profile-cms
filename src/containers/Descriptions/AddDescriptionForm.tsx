import * as React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import InputGroup from '../../components/InputGroup';

interface AddDescriptionFormProps extends InjectedFormProps {

}

const addDescriptionForm: React.StatelessComponent<AddDescriptionFormProps> = props => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <InputGroup
                name='icon'
                label='Icon for description block'
                placeholder='fa fa-success fa-2x'
                helperText='Use any simple line icons classes or font awesome classes'
            />
            <button type='submit'>Submit</button>
        </form>
    );
};

export const AddDescriptionForm = reduxForm({
    form: 'addDescription'
})(addDescriptionForm);

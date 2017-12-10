import * as React from 'react';
import {
    Label,
    InputGroup,
    Input,
    InputWrapper,
    InputHelperText,
    InputErrorText
} from './styles';
import { Field, Validator } from 'redux-form';

interface InputGroupProps {
    label?: string;
    type?: string;
    name: string;
    placeholder?: string;
    helperText?: string;
    validators?: Validator | Validator[];
}

export const generateInputClass = ({ active, valid, invalid, submitFailed }): string => {
    const activeClass = active || submitFailed ? 'active' : '';
    const validClass = valid ? 'valid' : '';
    const invalidClass = invalid ? 'invalid' : '';
    return `${activeClass} ${validClass} ${invalidClass}`;
};

const renderInput = field => {
    const { meta, input, placeholder, type, title } = field;
    return (
        <InputWrapper className={generateInputClass(meta)}>
            <Input {...input} placeholder={placeholder} type={type}/>
            {
                meta.active && title && !(meta.submitFailed && meta.error) ?
                    <InputHelperText>{title}</InputHelperText> :
                    null
            }
            {
                meta.submitFailed && meta.error ?
                    <InputErrorText>{meta.error}</InputErrorText> : null
            }
        </InputWrapper>
    );
};

export const InputGroupComponent: React.StatelessComponent<InputGroupProps> =
    (
        {
            label = 'test label',
            type = 'string',
            name,
            placeholder = '',
            helperText = '',
            validators
        }
    ) => (
    <InputGroup>
        <Label htmlFor={name}>
            {label}
        </Label>
        <Field
            name={name}
            component={renderInput}
            type={type}
            placeholder={placeholder}
            title={helperText}
            validate={validators}
        />
    </InputGroup>
);

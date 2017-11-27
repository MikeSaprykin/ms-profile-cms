import * as React from 'react';
import {
    Label,
    InputGroup,
    Input,
    InputWrapper,
    InputHelperText
} from './styles';
import { Field, WrappedFieldProps } from 'redux-form';

interface InputGroupProps {
    label?: string;
    type?: string;
    name: string;
    placeholder?: string;
    helperText?: string;
}

const generateInputClass = ({ active, valid, invalid }): string => {
    const activeClass = active ? 'active' : '';
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
                meta.active && title ?
                    <InputHelperText>{title}</InputHelperText> :
                    null
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
            helperText = ''
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
        />
    </InputGroup>
);

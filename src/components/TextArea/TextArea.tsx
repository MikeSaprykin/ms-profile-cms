import * as React from 'react';
import {
    InputErrorText,
    InputGroup,
    InputHelperText,
    InputWrapper,
    Label
} from '../InputGroup/styles';
import { Field, Validator } from 'redux-form';
import { generateInputClass } from '../InputGroup/InputGroup';
import { TextArea } from './styles';

interface TextAreaProps {
    label?: string;
    name: string;
    placeholder?: string;
    validators?: Validator | Validator[];
}

const renderTextArea = field => {
    const { meta, input, placeholder, title } = field;
    return (
        <InputWrapper className={generateInputClass(meta)}>
            <TextArea
                {...input}
                placeholder={placeholder}
            />
            {
                meta.active && title ?
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

export const TextAreaComponent: React.StatelessComponent<TextAreaProps> =
    (
        {
            label = '',
            name,
            placeholder = '',
            validators
        }
    ) => (
        <InputGroup>
            <Label htmlFor={name}>
                {label}
            </Label>
            <Field
                name={name}
                component={renderTextArea}
                placeholder={placeholder}
                validate={validators}
            />
        </InputGroup>
);

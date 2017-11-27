import * as React from 'react';
import { CardHeader } from '../../components/Card';
import { ButtonLink } from '../../components/Button';
import { AddDescriptionForm } from './AddDescriptionForm';
import {
    ButtonLinkContent,
    AddDescriptionContent,
    AddDescriptionTitle,
    AddDescriptionFormWrapper
} from './styles';

export const AddDescription = () => (
    <div>
        <CardHeader>
            <AddDescriptionContent>
                <ButtonLink>
                    <ButtonLinkContent to='/descriptions'>
                        <i className='fa fa-arrow-left' />
                        Back
                    </ButtonLinkContent>
                </ButtonLink>
                <AddDescriptionTitle>
                    Add description
                </AddDescriptionTitle>
            </AddDescriptionContent>
        </CardHeader>
        <AddDescriptionFormWrapper>
            <AddDescriptionForm />
        </AddDescriptionFormWrapper>
    </div>
);

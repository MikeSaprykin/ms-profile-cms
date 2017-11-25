import * as React from 'react';
import { CardHeader } from '../../components/Card';
import { ButtonLink } from '../../components/Button';
import {
    ButtonLinkContent,
    AddDescriptionContent,
    AddDescriptionTitle,
    AddDescriptionForm
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
        <AddDescriptionForm>
            Oppa
        </AddDescriptionForm>
    </div>
);

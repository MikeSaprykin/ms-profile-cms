import * as React from 'react';

import { LoaderContainer, LoaderItem, LoaderCircle, LoaderOverlay } from './styles';

export const Loader = () => (
    <LoaderContainer>
        <LoaderOverlay />
        <LoaderItem>
            <svg width='1em' height='1em'>
                <LoaderCircle cx='0.5em' cy='0.5em' r='0.45em' />
            </svg>
        </LoaderItem>
    </LoaderContainer>
);
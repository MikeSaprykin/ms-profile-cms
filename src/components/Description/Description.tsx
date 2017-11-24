import * as React from 'react';
import {
    DescriptionWrapper,
    DescriptionContainer,
    
} from './styles';
import { DescriptionModel } from '../../store';
import { DescriptionContent } from './DescriptionContent';
import DescriptionLegend from './DescriptionLegend';

interface DescriptionProps {
    description: DescriptionModel;
    actions: {
        onExpand: Function;
        onEdit: Function;
        onDelete: Function;
    };
}

export const Description: React.StatelessComponent<DescriptionProps> =
    ({
         description,
         actions
    }) => (
    <DescriptionContainer>
        <DescriptionWrapper>
            <DescriptionLegend />
            <DescriptionContent
                actions={actions}
                {...description}
            />
            {
                description.expanded ?
                <h1>Expanded</h1> :
                null
            }
        </DescriptionWrapper>
    </DescriptionContainer>
);

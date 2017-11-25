import * as React from 'react';
import {
    DescriptionWrapper,
    DescriptionContainer,
    DescriptionDetails
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
                <DescriptionDetails>
                    <h4>Description:</h4>
                    {description.description}
                </DescriptionDetails> :
                null
            }
        </DescriptionWrapper>
    </DescriptionContainer>
);

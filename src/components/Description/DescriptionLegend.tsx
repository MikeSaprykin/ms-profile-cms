import * as React from 'react';
import { DescriptionBlock, DescriptionLegendItem } from './styles';

export default () => (
    <DescriptionBlock>
        <DescriptionLegendItem className='description-icon'>
            Icon
        </DescriptionLegendItem>
        <DescriptionLegendItem className='description-title'>
            Title
        </DescriptionLegendItem>
        <DescriptionLegendItem className='description-actions'>
            Actions
        </DescriptionLegendItem>
    </DescriptionBlock>
);

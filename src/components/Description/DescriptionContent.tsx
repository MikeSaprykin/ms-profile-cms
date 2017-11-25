import * as React from 'react';
import { DescriptionActions } from './DescriptionActions';
import { DescriptionBlock, DescriptionBlockItem, DescriptionIcon } from './styles';

interface DescriptionContentProps {
    icon: string;
    title: string;
    _id: string;
    expanded?: boolean;
    actions: {
      onEdit: Function;
      onDelete: Function;
      onExpand: Function;
    };
}

export const DescriptionContent: React.StatelessComponent<DescriptionContentProps> =
    ({
        icon,
        title,
        _id,
        expanded,
        actions
    }) => (
    <DescriptionBlock>
        <DescriptionBlockItem className='description-icon'>
            <DescriptionIcon className={icon} />
        </DescriptionBlockItem>
        <DescriptionBlockItem className='description-title'>
            <h4>{title}</h4>
        </DescriptionBlockItem>
        <DescriptionBlockItem className='description-actions'>
            <DescriptionActions
                id={_id}
                expanded={expanded}
                {...actions}
            />
        </DescriptionBlockItem>
    </DescriptionBlock>
);

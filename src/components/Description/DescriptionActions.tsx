import * as React from 'react';
import { DescriptionActionsBlock, DescriptionBlock, DescriptionAction } from './styles';

interface DescriptionActionsProps {
    expanded: boolean;
    onExpand: Function;
    onEdit: Function;
    onDelete: Function;
    id: string;
}

export const DescriptionActions: React.StatelessComponent<DescriptionActionsProps> =
    ({
        expanded,
        onDelete,
        onExpand,
        onEdit,
        id
       }) => (
    <DescriptionActionsBlock>
        <DescriptionBlock>
            <div>
                <DescriptionAction
                    className={expanded ? 'expanded material-icons' : 'material-icons'}
                    onClick={() => onExpand(id)}
                >
                    arrow_downward
                </DescriptionAction>
                <DescriptionAction
                    className='material-icons'
                    onClick={() => onEdit(id)}
                >
                    mode_edit
                </DescriptionAction>
                <DescriptionAction
                    className='material-icons'
                    onClick={() => onDelete(id)}
                >
                    delete_forever
                </DescriptionAction>
            </div>
        </DescriptionBlock>
    </DescriptionActionsBlock>
);

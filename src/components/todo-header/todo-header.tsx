import * as React from 'react';
import {
    TodoHeader,
    TodoHeaderPlus,
    TodoHeaderText
} from './todo-header.styles';

interface TodoHeaderProps {
    onAddClick: Function;
}

const todoHeader: React.StatelessComponent<TodoHeaderProps> = ({ onAddClick }) =>
(
    <TodoHeader>
        <TodoHeaderPlus onClick={() => onAddClick()} >
            <i className="material-icons md-36">add</i>
        </TodoHeaderPlus>
        <TodoHeaderText>
            Add a todo...
        </TodoHeaderText>
    </TodoHeader>
);

export default todoHeader;

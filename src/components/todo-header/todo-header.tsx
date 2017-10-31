import * as React from 'react';
import {
    TodoHeader,
    TodoHeaderPlus,
    TodoHeaderText,
    TodoFilterWrapper,
    TodoFilterItem
} from './todo-header.styles';
import { TodoFilter } from '../../store/todo/reducers/todo.reducer';

interface TodoHeaderProps {
    onAddClick: Function;
    onTodoFilter: Function;
}

const todoHeader: React.StatelessComponent<TodoHeaderProps> = ({ onAddClick, onTodoFilter }) =>
(
    <TodoHeader>
        <TodoHeaderPlus onClick={() => onAddClick()} >
            <i className="material-icons md-36">add</i>
        </TodoHeaderPlus>
        <TodoHeaderText>
            Add a todo...
        </TodoHeaderText>
        <TodoFilterWrapper>
            <TodoFilterItem onClick={() => onTodoFilter(TodoFilter.ALL)}>
                All
            </TodoFilterItem>
            <TodoFilterItem onClick={() => onTodoFilter(TodoFilter.ACTIVE)}>
                Active
            </TodoFilterItem>
            <TodoFilterItem onClick={() => onTodoFilter(TodoFilter.DONE)}>
                Done
            </TodoFilterItem>
        </TodoFilterWrapper>
    </TodoHeader>
);

export default todoHeader;

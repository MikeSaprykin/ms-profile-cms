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
    currentFilter: TodoFilter;
}

const filterItems = [
    {
        value: TodoFilter.ALL,
        title: 'All'
    },
    {
        value: TodoFilter.ACTIVE,
        title: 'Active'
    },
    {
        value: TodoFilter.DONE,
        title: 'Done'
    }
];

const todoHeader: React.StatelessComponent<TodoHeaderProps> = ({ onAddClick, onTodoFilter, currentFilter }) => {
    const generateFilterItems = () => {
      return filterItems.map(item =>
          (
              <TodoFilterItem
                  key={item.value}
                  onClick={() => onTodoFilter(item.value)}
                  active={currentFilter === item.value}
              >
                  {item.title}
              </TodoFilterItem>
          )
      );
    };
    return (
        <TodoHeader>
            <TodoHeaderPlus onClick={() => onAddClick()}>
                <i className="material-icons md-36">add</i>
            </TodoHeaderPlus>
            <TodoHeaderText>
                Add a todo...
            </TodoHeaderText>
            <TodoFilterWrapper>
                {generateFilterItems()}
            </TodoFilterWrapper>
        </TodoHeader>
    );
}

export default todoHeader;

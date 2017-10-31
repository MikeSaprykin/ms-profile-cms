import * as React from 'react';
import {
    TodoHeader,
    TodoHeaderPlus,
    TodoHeaderText,
    TodoFilterWrapper,
    TodoFilterItem, TodoHeaderInput
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
    const generateFilterItems = () => filterItems.map(item =>
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
    return (
        <TodoHeader>
            <TodoHeaderPlus onClick={() => onAddClick()}>
                <i className="material-icons">add_box</i>
            </TodoHeaderPlus>
            <TodoHeaderText>
                <TodoHeaderInput
                    onChange={(e: any) => console.log(e)}
                    placeholder="Add todo..."
                />
            </TodoHeaderText>
            <TodoFilterWrapper>
                {generateFilterItems()}
            </TodoFilterWrapper>
        </TodoHeader>
    );
};

export default todoHeader;

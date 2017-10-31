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

class TodoHeaderComponent extends React.Component<TodoHeaderProps, any> {

    textInput: any;

    constructor(props: TodoHeaderProps) {
        super(props);
        this.state = { value: '' };
    }

    render() {
        const { onAddClick, onTodoFilter, currentFilter } = this.props;
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
        const handleChange = (event: any) => {
            this.setState({value: event.target.value});
        };
        const handleKeyDown = (event: KeyboardEvent) => {
          if (event.keyCode === 13) {
              handleSubmit();
          }
        };
        const handleSubmit = () => {
            const { value } = this.state;
            if (value) {
                onAddClick({value});
                this.setState({value: ''});
                if (this.textInput) {
                    this.textInput.blur();
                }
            }
        };
        const onInputSubmit = () => {
          handleSubmit();
        };
        return (
            <TodoHeader>
                <TodoHeaderPlus onClick={() => onInputSubmit()}>
                    <i className="material-icons">add_box</i>
                </TodoHeaderPlus>
                <TodoHeaderText>
                    <TodoHeaderInput
                        innerRef={(comp: any) => this.textInput = comp}
                        value={this.state.value}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        placeholder="Add todo..."
                    />
                </TodoHeaderText>
                <TodoFilterWrapper>
                    {generateFilterItems()}
                </TodoFilterWrapper>
            </TodoHeader>
        );
    }
}

export default TodoHeaderComponent;

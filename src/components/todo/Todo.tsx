import * as React from 'react';
import { TodoModel } from 'store/todo/models';
import { TodoWrapper, TodoCheckBox } from './todo.styles';

interface TodoProps {
    todo: TodoModel;
    toggleTodoDone: Function;
}

const todo: React.StatelessComponent<TodoProps> = ({ todo, toggleTodoDone }) => {
    const { done, title, description } = todo;
    return (
        <TodoWrapper>
            <TodoCheckBox onClick={() => toggleTodoDone()}>
                <i className="material-icons">
                    {
                        done ? 'check_box' : 'check_box_outline_blank'
                    }
                </i>
            </TodoCheckBox>
            <p>{title}</p>
            <p>{description}</p>
        </TodoWrapper>
    );
};

export default todo;

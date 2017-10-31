import * as React from 'react';
import { TodoModel } from 'store/todo/models';
import { TodoWrapper } from './todo.styles';

interface TodoProps {
    todo: TodoModel;
}

const todo: React.StatelessComponent<TodoProps> = ({ todo }) => {
    return (
        <TodoWrapper>
            <p>{todo.title}</p>
            <p>{todo.description}</p>
            <p>{todo.done ? 'Done' : null}</p>
        </TodoWrapper>
    );
};

export default todo;

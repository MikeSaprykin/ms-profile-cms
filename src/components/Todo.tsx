import * as React from 'react';
import { TodoModel } from '../store/todo/models/todo.model';
import styled from 'styled-components';

interface TodoProps extends StyledComponent {
    todo: TodoModel;
}

const todo: React.StatelessComponent<TodoProps> = ({ todo, className }) => {
    return (
        <li className={className}>
            <p>{todo.title}</p>
            <p>{todo.description}</p>
            <p>{todo.done ? 'Done' : null}</p>
        </li>
    );
};

const todoStyles = styled(todo)`
  background-color: blue;
`;

export default todoStyles;

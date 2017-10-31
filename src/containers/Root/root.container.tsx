import * as React from 'react';
import {  QueryProps } from 'react-apollo';

import { TodoModel } from 'store/todo/models';
import Todo from '../../components/todo/Todo';
import TodoHeader from '../../components/todo-header/todo-header';
import { RootWrapper } from './root.styles';

interface AppData extends QueryProps {
    todos: Array<TodoModel>;
}

interface AppPropTypes {
    data: AppData;
}

const renderTodo = (todo: TodoModel) => {
    return <Todo todo={todo} key={todo._id} />;
};

export const Root: React.StatelessComponent<AppPropTypes> = ({ data: { todos = [] } }) =>
    (
        <RootWrapper>
            <TodoHeader onAddClick={() => console.log('CLICKED!')}/>
            {todos.map(renderTodo)}
        </RootWrapper>
    );

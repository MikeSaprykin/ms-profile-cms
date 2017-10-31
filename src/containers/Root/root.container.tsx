import * as React from 'react';
import {  QueryProps } from 'react-apollo';

import { TodoModel } from 'store/todo/models';
import Todo from '../../components/todo/Todo';
import TodoHeader from '../../components/todo-header/todo-header';
import { RootWrapper } from './root.styles';
import graphql from 'react-apollo/graphql';
import { TodosQuerry } from './root.querry';
import { TodoFilter } from '../../store/todo/reducers/todo.reducer';

interface AppData extends QueryProps {
    todos: Array<TodoModel>;
}

export interface AppPropTypes {
    data: AppData;
    dispatch: any;
    state: any;
    toggleTodoFilter: any;
    done: TodoFilter;
}

const renderTodo = (todo: TodoModel) => {
    return <Todo todo={todo} key={todo._id} />;
};

export const Root: React.StatelessComponent<AppPropTypes> = (props) => {
    const { data: { todos = [], refetch }, toggleTodoFilter } = props;
    const filterTodos = (filterType: TodoFilter) => {
        toggleTodoFilter(filterType);
        refetch();
    };
    return (
        <RootWrapper>
            <TodoHeader
                onAddClick={() => console.log('ADD!')}
                onTodoFilter={filterTodos}
            />
            {todos.map(renderTodo)}
        </RootWrapper>
    );
};

export default graphql<AppData, AppPropTypes>(
    TodosQuerry, {
    options: ({ done = TodoFilter.ALL }) => ({
        variables: {
            done
        },
    })
}
)(Root);

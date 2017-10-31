import * as React from 'react';
import { graphql, QueryProps, compose } from 'react-apollo';

import { TodoModel } from 'store/todo/models';
import Todo from '../../components/todo/Todo';
import TodoHeader from '../../components/todo-header/todo-header';
import { RootWrapper } from './root.styles';
import { TodosQuerry } from './root.querry';
import { TodoFilter } from '../../store/todo/reducers/todo.reducer';
import { ToggleTodoDone, AddTodo } from './root.mutations';

interface AppData extends QueryProps {
    todos: Array<TodoModel>;
}

export interface AppPropTypes {
    data: AppData;
    dispatch: any;
    state: any;
    toggleTodoFilter: any;
    done: TodoFilter;
    toggleDone: Function;
    addTodo: Function;
}

const renderTodo = (todo: TodoModel, toggleTodoDone: Function) =>
    (
        <Todo
            todo={todo}
            key={todo._id}
            toggleTodoDone={() => toggleTodoDone(todo._id, !todo.done)}
        />);

export const Root: React.StatelessComponent<AppPropTypes> = (props) => {
    const { data: { todos = [], refetch }, toggleTodoFilter, done, toggleDone, addTodo } = props;
    const filterTodos = (done: TodoFilter) => {
        toggleTodoFilter(done);
        refetch({ done });
    };
    const toggleTodoDone = (id: string, done: boolean) => {
        toggleDone({ variables: { id, done }})
            .then(() => refetch());
    };
    const addTodoCall = (data: any) => {
        addTodo({ variables: { title: data.value }})
            .then(() => refetch());
    };
    return (
        <RootWrapper>
            <TodoHeader
                currentFilter={done}
                onAddClick={addTodoCall}
                onTodoFilter={filterTodos}
            />
            {todos.map((todo) => renderTodo(todo, toggleTodoDone))}
        </RootWrapper>
    );
};

export default compose(
    graphql(ToggleTodoDone, {
        name: 'toggleDone'
    }),
    graphql(AddTodo, {
        name: 'addTodo'
    }),
    graphql(TodosQuerry)
)(Root);

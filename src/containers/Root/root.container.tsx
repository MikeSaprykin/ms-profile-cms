import * as React from 'react';
import {  QueryProps } from 'react-apollo';

import { TodoModel } from 'store/todo/models';
import Todo from '../../components/todo/Todo';
import TodoHeader from '../../components/todo-header/todo-header';
import { RootWrapper } from './root.styles';

interface AppData extends QueryProps {
    todos: Array<TodoModel>;
}

export interface AppPropTypes {
    data: AppData;
    state: any;
    dispatch: any;
}

const renderTodo = (todo: TodoModel) => {
    return <Todo todo={todo} key={todo._id} />;
};

export class Root extends React.Component<AppPropTypes, any> {
    render () {
        const { data: { todos = [] } } = this.props;
        return (
            <RootWrapper>
                <TodoHeader
                    onAddClick={() => console.log('CLICKED!')}
                    onTodoFilter={(index: number) => console.log(index)}
                />
                {todos.map(renderTodo)}
            </RootWrapper>
        );
    }
}

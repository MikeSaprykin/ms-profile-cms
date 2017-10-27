import * as React from 'react';
import './App.css';
import styled from 'styled-components';
import { graphql, QueryProps } from 'react-apollo';
import gql from 'graphql-tag';
import { TodoModel } from 'store/todo/models';
import Todo from './components/Todo';

const logo = require('./logo.svg');

interface AppData extends QueryProps {
    todos: Array<TodoModel>;
}

interface AppPropTypes extends StyledComponent {
    className?: any;
    data: AppData;
}

class App extends React.Component<AppPropTypes, {}> {
  render() {
    const { data: { todos = [] }, className} = this.props;
    return (
      <div className={className}>
          {todos.map(this.renderTodo)}
      </div>
    );
  }
  renderTodo(todo: TodoModel, i: number) {
      return <Todo todo={todo} key={i} />;
  }
}

const AppStyle = styled(App)`
  background-color: red;
`;

const Todos = gql`
    query {
        todos{
            title,
            description,
            done
        }
    }
`;

export default graphql(Todos)(AppStyle);

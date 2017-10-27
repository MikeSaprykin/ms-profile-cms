import * as React from 'react';
import './App.css';
import styled from 'styled-components';
import { graphql, QueryProps } from 'react-apollo';
import gql from 'graphql-tag';
import { TodoModel } from './store/todo/models/todo.model';
import Todo from './components/Todo';

const logo = require('./logo.svg');

interface AppData extends QueryProps {
    todos: Array<TodoModel>;
}

interface AppPropTypes {
    className?: any;
    data: AppData;
}

class App extends React.Component<AppPropTypes, {}> {
  render() {
    const { data: { todos = [] }} = this.props;
    return (
      <div className={this.props.className}>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
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

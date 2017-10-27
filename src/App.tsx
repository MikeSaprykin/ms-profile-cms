import * as React from 'react';
import './App.css';
import styled from 'styled-components';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const logo = require('./logo.svg');

interface AppPropTypes {
    className?: any;
    data: any;
}

class App extends React.Component<AppPropTypes, {}> {
  render() {
      const { data: { todos }} = this.props;
    return (
      <div className={this.props.className}>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
          {todos ? todos.map((todo: any, i: number) =>
              <li key={i}>
                  <p>{todo.title}</p>
                  <p>{todo.description}</p>
                  <p>{todo.done}</p>
              </li>
          ) : null}
      </div>
    );
  }
}

const AppStyle = styled(App)`
  background-color: red;
`;

const Todos = gql`
    query {
        todos(done: true){
            title,
            description,
            done
        }
    }
`;

export default graphql(Todos)(AppStyle);

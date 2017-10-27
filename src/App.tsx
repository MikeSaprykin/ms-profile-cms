import * as React from 'react';
import './App.css';
import styled from 'styled-components';

const logo = require('./logo.svg');

class App extends React.Component<{ className?: any}, {}> {
  render() {
    return (
      <div className={this.props.className}>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

const AppStyle = styled(App)`
  background-color: red;
`;

export default AppStyle;

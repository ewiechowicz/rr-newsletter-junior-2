import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ThreeButtons from './ThreeButtons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/ThreeButtons.js</code> and save to reload.
        </p>
        <ThreeButtons />
      </div>
    );
  }
}

export default App;

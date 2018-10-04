import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>{process.env.REACT_APP_DARK_SKY_API_KEY}</p>
        </header>
      </div>
    );
  }
}

export default App;

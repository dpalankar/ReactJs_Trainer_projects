import React, { Component } from 'react';

import Counter from './containers/Counter/Counter';
import StoreList from './containers/StoreList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Counter />
       <StoreList/>
      </div>
    );
  }
}

export default App;

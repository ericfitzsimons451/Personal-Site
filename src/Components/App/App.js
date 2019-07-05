import React, { Component } from 'react';
import Header from '../Header/Header'
import './App.css';

export class App extends Component {
  constructor() {
    super() 
    this.state = {
      loading: false
    }
  }
  
  render () {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
  
}

export default App;

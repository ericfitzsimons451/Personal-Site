import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header'
import Nav from '../Nav/Nav'
import MainDisplay from '../MainDisplay/MainDisplay'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      currentView: ''
    }
  }
  
  setCurrentView = (viewName) => {
    this.setState({currentView: viewName})
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Nav setCurrentView={this.setCurrentView} />
        <MainDisplay displayContent={this.state.currentView} />
      </div>
    );
  }
}

export default App;

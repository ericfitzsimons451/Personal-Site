import React, { Component } from 'react';
import './App.scss';
import Header from '../Header/Header'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import Video from '../Video/Video'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      currentView: ''
    }
  }
  
  setCurrentView = (viewName) => {
    this.setState({ currentView: viewName })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Projects />
        <About />
        <Video />
        <Contact />
        {/* <Nav setCurrentView={this.setCurrentView}
             currentView={this.state.currentView} />
        <MainDisplay displayContent={this.state.currentView} /> */}
      </div>
    );
  }
}

export default App;

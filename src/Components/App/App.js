import React, { Component } from 'react';
import './App.scss';
import Header from '../Header/Header'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
// import Nav from '../Nav/Nav'
// import MainDisplay from '../MainDisplay/MainDisplay'
// import Prismic from 'prismic-javascript'
// import { Date, Link, RichText } from 'prismic-reactjs'

// const apiEndpoint = 'https://your-repo-name.cdn.prismic.io/api/v2'
// const accessToken = '' // This is where you would add your access token for a Private repository
 
// const Client = Prismic.client(apiEndpoint, { accessToken })

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
        <About />
        <Projects />
        <Contact />
        {/* <Nav setCurrentView={this.setCurrentView}
             currentView={this.state.currentView} />
        <MainDisplay displayContent={this.state.currentView} /> */}
      </div>
    );
  }
}

export default App;

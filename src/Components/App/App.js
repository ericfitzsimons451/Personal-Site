import React from 'react';
import './App.scss';
import Header from '../Header/Header';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Video from '../Video/Video';
import Signature from '../Signature/Signature'
export const App = () => {
  
  return (
    <div className="app">
      <Header />
      <About />
      <Projects />
      <Video />
      <Contact />
      <Signature />
    </div>
  )
};

export default App;

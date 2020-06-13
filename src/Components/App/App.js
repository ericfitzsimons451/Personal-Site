import React from 'react';
import './App.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from '../Header/Header';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Video from '../Video/Video';

export const App = () => {
  
  return (
    <div className="app">
      <Header />
      <Projects />
      <About />
      <Video />
      <Contact />
    </div>
  )
};

export default App;

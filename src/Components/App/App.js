import React from 'react';
import './App.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Header from '../Header/Header'
import About from '../About/About'
import Carousel from '../Projects/Projects'
import Contact from '../Contact/Contact'
import Video from '../Video/Video'

export const App = () => {
  
  return (
    <div className="app">
      <Header />
      <Carousel />
      {/* <Projects /> */}
      <About />
      <Video />
      <Contact />
    </div>
  );
}

export default App;

/*

import React from 'react';
import { render } from 'react-dom';
import Carousel from './Carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const App = () => (
    <div>
        <Carousel />
    </div>
);
*/

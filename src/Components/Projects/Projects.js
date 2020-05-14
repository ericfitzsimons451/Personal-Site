import React from 'react'
import './Projects.scss'
import church from '../../Assets/stateOfTheChurch.png'
import palette from '../../Assets/Palette.png'
import radio from '../../Assets/radio.png'
import movieTracker from '../../Assets/MovieTracker.png'
import getSwole from '../../Assets/getSwole.png'


const Projects = () => {
  return (
    <div className="projects">
      <h2>Here's what I've done so far</h2>
      <div className="project-container">
        <a href="https://www.stateofthechurch.com" className="center">
          <img src={church} className="church" alt="State of the Church" />
        </a>
        <div className="project-description">
          <h3 className="heading">Barna's State of the Church</h3>
          <h4>February - March 2020</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </div>
      <div className="project-container">
        <img src={church} className="entercom" alt="Entercom Streaming Audio" />
          <div className="project-description">
            <h3 className="heading">Entercom Streaming Audio</h3>
            <h4>HLS Streaming Audio</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
        </div>
        <div className="project-container">
          <a href="https://github.com/ericfitzsimons451/palette-picker-ui" className="center">
            <img src={palette} className="entercom" alt="Palette Picker" />
          </a>
        <div className="project-description">
          <h3 className="heading">Palette Picker</h3>
          <h4>Group Project</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </div>




      {/* <div className="project-container">
        <div>
          <div className="icon-container">
            <a href="https://www.reactjs.org"><img src={react} className="react" alt="React" /></a>
            <a href="https://www.redux.js.org"><img src={redux} className="redux" alt="Redux" /></a>
            <a href="https://www.jestjs.io"><img src={jest} className="jest" alt="Jest" /></a>
            <a href="https://www.nodejs.org"><img src={nodeJS} className="nodeJS" alt="NodeJS" /></a>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <div className="flex-projects">
          <h3 className="project-title">Movie Tracker</h3>
          <a href="https://github.com/ericfitzsimons451/movie-tracker-trs-ef" className="center">
            <img src={movieTracker} className="movieTracker" alt="Movie Tracker" />
          </a>
        </div>         
      </div>
      <div className="project-container">
        <div className="flex-projects">
          <h3 className="project-title">Get Swole</h3>
          <a href="https://github.com/ericfitzsimons451/JA-DC-EF-TA--GetSwole" className="center">
            <img src={getSwole} className="getSwole" alt="Get Swole" />
          </a>
        </div> 
        <div>
          <div className="icon-container">
            <img src={react} className="react" alt="React" />
            <img src={sass} className="sass" alt="Sass" />
            <img src={redux} className="redux" alt="Redux" />
            <img src={react} className="react" alt="react" />
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </div>  */}

    </div>
  )
}

export default Projects





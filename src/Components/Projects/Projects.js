import React from 'react'
import './Projects.scss'
import react from '../../Assets/pngwave.png'
import palette from '../../Assets/Palette.png'
import movieTracker from '../../Assets/MovieTracker.png'
import getSwole from '../../Assets/getSwole.png'
import materialUi from '../../Assets/MaterialUi.png'
import nodeJS from '../../Assets/NodeJS.png'
import redux from '../../Assets/Redux.png'
import jest from '../../Assets/jest.png'
import sass from '../../Assets/sass.png'

const Projects = () => {
  return (
    <div className="projects">
      <div className="project-container">
        <div className="flex-projects">
          <h3 className="project-title">Palette Picker</h3>
          <a href="https://github.com/ericfitzsimons451/palette-picker-ui" className="center">
            <img src={palette} className="palette" alt="Palette Picker" />
          </a>
        </div>
        <div>
          <div className="icon-container">
            <img src={react} className="react" alt="React" />
            <img src={redux} className="redux" alt="Redux" />
            <img src={materialUi} className="material-Ui" alt="Material-UI" />
            <img src={nodeJS} className="nodeJS" alt="NodeJS" />
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>      
      </div>
      <div className="project-container">
        <div>
          <div className="icon-container">
            <img src={react} className="react" alt="React" />
            <img src={redux} className="redux" alt="Redux" />
            <img src={jest} className="jest" alt="Jest" />
            <img src={nodeJS} className="nodeJS" alt="NodeJS" />
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
      </div>
    </div>
  )
}

export default Projects



import React from 'react'
import './Projects.scss'
import church from '../../Assets/stateOfTheChurch.png'
import palette from '../../Assets/Palette.png'

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
    </div>
  )
};

export default Projects;





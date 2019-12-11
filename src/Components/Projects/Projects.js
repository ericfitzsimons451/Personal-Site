import React from 'react'
import './Projects.scss'
import palette from '../../Assets/Palette.png'
import movieTracker from '../../Assets/MovieTracker.png'
import getSwole from '../../Assets/getSwole.png'

const Projects = () => {
  return (
    <div className="projects">
      <div className="project-container">
        <a href="https://github.com/ericfitzsimons451/palette-picker-ui">
          <h3 className="project-title">Palette Picker</h3>
          <img src={palette} className="palette" alt="Palette Picker" ></img>
          <p className="project-description">Choose and save randomly generated color palettes</p>
        </a>
      </div>
      <div className="project-container">
        <a href="https://github.com/ericfitzsimons451/movie-tracker-trs-ef">
          <h3 className="project-title">Movie Tracker</h3>
          <img src={movieTracker} className="movieTracker" alt="Palette Picker" ></img>
          <p className="project-description">Login to track your favorite movies!</p>
        </a>
      </div>
      <div className="project-container">
        <a href="https://github.com/ericfitzsimons451/JA-DC-EF-TA--GetSwole">
          <h3 className="project-title">Get Swole</h3>
          <img src={getSwole} className="getSwole" alt="Palette Picker" ></img>
          <p className="project-description">Native application for making and scheduling workouts</p>
        </a>
      </div>
    </div>
  )
}

export default Projects
import React from 'react'
import './Projects.scss'
import palette from '../../Assets/Palette.png'
import movieTracker from '../../Assets/MovieTracker.png'
import getSwole from '../../Assets/getSwole.png'

export const Projects = () => {
  return (
    <div className="projects">
        <img src={palette} className="palette" alt="Palette Picker" ></img>
        <img src={movieTracker} className="movieTracker" alt="Palette Picker" ></img>
        <img src={getSwole} className="getSwole" alt="Palette Picker" ></img>
    </div>
  )
}

export default Projects
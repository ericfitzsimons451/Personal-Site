import React from 'react'
import './Projects.scss'
import palette from '../../Assets/Palette.png'

export const Projects = () => {
  return (
    <div className="projects">
      <div className="palette-container">
        <img src={palette} className="palette" alt="Palette Picker" ></img>
      </div>

    </div>
  )
}

export default Projects
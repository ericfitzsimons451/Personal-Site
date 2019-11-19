import React from 'react'
import './MainDisplay.scss'
import Contact from '../Contact/Contact'
import About from '../About/About'
import Projects from '../Projects/Projects'

export const MainDisplay = (props) => {
  const { displayContent } = props
  return (
    <div className="display">
      { displayContent === 'Projects' && <Projects /> }
      { displayContent === 'About Me' && <About /> }
      { displayContent === 'Contact' && <Contact /> }
    </div>
  )
}

export default MainDisplay
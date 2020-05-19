import React from 'react'
import './Header.scss'
import { Link } from 'react-scroll'

export const Header = () => {
  return (
    <div className="header">
      <div className="flex-container">
        <div className="personal-info">
          <h1 className="header-name">Eric Fitzsimons</h1>
          <h3 className="job-title">Web Developer</h3>
        </div>
        <div className="scroll-container">
          <Link
           className="link"
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-20}
            duration= {500}
          >
            Projects
          </Link>
           <Link
            className="link"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-20}
            duration= {500}
          >
            About
          </Link>
           <Link
            className="link"
            activeClass="active"
            to="video"
            spy={true}
            smooth={true}
            offset={-20}
            duration= {500}
          >
            Public Speaking
          </Link>
           <Link
            className="link"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-20}
            duration= {800}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header

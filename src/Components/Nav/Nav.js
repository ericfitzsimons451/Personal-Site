import React from 'react';
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <div className="scroll-container">
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
  )
};

export default Nav;
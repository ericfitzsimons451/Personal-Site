import React from 'react'
import './Header.scss'
import github from '../../Assets/github.svg'
import eric from '../../Assets/Eric_Fitzsimons_Headshot.png'
import linkedIn from '../../Assets/linkedin.svg'

export const Header = () => {
  return (
    <div className="header">
      <div className="header-nav">
        <h2>Home</h2>
        <h2>Blog</h2>
      </div>
      <div className="flex-container">
        <div className="personal-info">
          <h1 className="header-name">Eric Fitzsimons</h1>
          <h3 className="job-title">Web Developer</h3>
        </div>
        {/* <img className="eric" 
          src={eric} 
          alt="Eric Fitzsimons"
        /> */}
      </div>
      {/* <div className="link-container">
        <div className="link-div">
          <a href='https://github.com/ericfitzsimons451'>
            <img className="github"
              src={github}
              alt="github link"
            />
          </a>
        </div>
        <div className="link-div">
          <a href='https://www.linkedin.com/in/ericfitzsimons451/'>
            <img className="linkedIn"
              src={linkedIn}
              alt="linkedIn link" 
            />
          </a>
        </div>
      </div> */}
    </div>
  )
}

export default Header
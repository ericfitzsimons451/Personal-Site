import React from 'react'
import eric from '../../Assets/Eric_Fitzsimons_Headshot.png'
import github from '../../Assets/github.svg'
import linkedIn from '../../Assets/linkedin.svg'

import './Contact.scss'



export const Contact = () => {
  return (
    <div className="contact">
      <h2 className="text">Contact Info</h2>
      <div className="link-container">
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
      </div>
      <div>
        <h3 className="text">ericfitzsimons451@gmail.com</h3>
        <h3 className="text">720-569-9970</h3>
      </div>
    </div>
  )
}

export default Contact
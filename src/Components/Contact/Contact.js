import React from 'react';
import './Contact.scss';
import github from '../../Assets/github.svg';
import linkedIn from '../../Assets/linkedin.svg';

export const Contact = () => {
  return (
    <section className="contact-section">
      <h2>Contact</h2>
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
      <div className="contact-info">
        <h3>ericfitzsimons451@gmail.com</h3>
        <h3>720-569-9970</h3>
      </div>
    </section>
  )
};

export default Contact;
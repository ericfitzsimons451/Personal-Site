import React from 'react';
import './About.scss';

export const About = () => {
  return (
    <section className="about">
      <h2 className= "about-heading">About</h2>
      <div className="about-article">
        <div>
          <h3 className="about-text"> 
            Front-end developer, excited about making 
            connections between people and their passions via 
            web-based applications. Working as an overseas educator for 
            15 years has given me a broad worldview and an appreciation 
            for diversity and inclusive perspectives.  Comfortable in 
            both supportive and leadership roles, I strive to cultivate 
            collaborative, communicative teams.  
          </h3>
          <h3 className="about-text">When I am not programming, I can be
            found in front of the stove cooking for my wife and friends,
            on the disc golf course, playing guitar, or spending time
            with my dog, Charlie.
          </h3>
        </div>
      </div>
    </section>
  )
};

export default About;
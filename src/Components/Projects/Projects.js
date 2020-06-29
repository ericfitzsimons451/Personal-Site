import React from 'react';
import './Projects.scss';
import church from '../../Assets/stateOfTheChurch.png';
import entercom from '../../Assets/entercom.png';
import movie from '../../Assets/movie-tracker.png';
import palette from '../../Assets/Palette.png';

const Projects = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>
      
      <div className="projects-container">
        <div className="project-hover">
          <div className="project">
            <a href="https://www.stateofthechurch.com">
              <div className="img-background">
                <img src={church} className="church" alt="State of the Church" />
              </div>
            </a>
            <div className="project-description">
              <a href="https://www.stateofthechurch.com">
                <h3 className="project-heading">State of the Church</h3>
              </a>
              <p>Call-to-action site geared towards church leaders seeking analytical data on churchgoers.
                Acted as the main front-end developer for Barna's call-to-action site.
                Built & maintained component functionality and styling.
              </p>
              <p>ReactJS/NextJS, Prismic CMS, Material-UI, Emotion-JS</p>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="img-background">
            <img src={entercom} className="entercom" alt="Entercom Streaming Audio" />
          </div>
          <div className="project-description">
            <h3 className="project-heading">Streaming Audio</h3>
            <p>HLS streaming audio platform delivering dynamically-generated audio
              streams.  Created endpoints for new features and rigorously tested
              the application via unit and integration tests during final delivery.
            </p>
            <p>HLS, NodeJS, PugJS, DynamoDB, Docker, WinstonJS, Chai, Mocha, Sinon</p>      
          </div>
        </div>
        <div className="project">
          <div className="img-background">
            <a href="https://limitless-escarpment-99578.herokuapp.com/">
              <img src={ palette } className="palette" alt="Palette Picker App" />
            </a>
          </div>
          <div className="project-description">
            <a href="https://github.com/ericfitzsimons451/palette-picker-ui">
              <h3 className="project-heading">Palette Picker</h3>
            </a>
            <p>Full-stack React/Redux application allowing the user to randomly create
              and save color palettes.  Created database with endpoints for CRUD functionality,
              and adapted to the rigors of Material-UI pre-styled components.
            </p>
            <p>NodeJS, Express, Postgres-QL, Travis-CI, Jest, Enzyme, Supertest</p>
          </div>
        </div> 
        <div className="project">
          <div className="img-background">
            <a href="https://github.com/ericfitzsimons451/movie-tracker-trs-ef">
              <img src={movie} className="movieTracker" alt="Movie Tracker App" />
            </a>
          </div>
          <div className="project-description">
          <a href="https://github.com/ericfitzsimons451/movie-tracker-trs-ef">
            <h3 className="project-heading">Movie Tracker</h3>
          </a>
            <p>Netflix-style application for saving and displaying movie posters.
               A paired project, it required user authentication, and the implementation
               of Redux for state-management as well as API calls to fetch data.
            </p>
            <p>ReactJS, Redux, React Router, Jest, Enzyme, Sass</p>               
          </div>
        </div>
      </div>
    </div>
  )
};

export default Projects;

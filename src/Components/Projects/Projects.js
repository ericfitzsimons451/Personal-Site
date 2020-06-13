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
      <div className="project-container">
        <div className="project">
          <a href="https://www.stateofthechurch.com">
            <img src={church} className="church" alt="State of the Church" />
          </a>
          <div className="project-description">
            <a href="https://www.stateofthechurch.com">
              <h3 className="project-heading">Barna's State of the Church</h3>
            </a>
            <p>Call-to-action site geared towards church leaders looking for more analytical data.
               Acted as the main front-end developer for Barna's call-to-action site.
               Built and maintained components and updated styles to fit client needs and desires.
            </p>
            <p>Tech: ReactJS/NextJS, Prismic CMS, Material-UI, Emotion-JS</p>
          </div>
        </div>
        <div className="project">
          <img src={entercom} className="entercom" alt="Entercom Streaming Audio" />
            <div className="project-description">
              <h3 className="project-heading">Entercom Streaming Audio</h3>
              <p>HLS streaming audio platform delivering dynamically-generated audio
                streams.  Created endpoints for new features and rigorously tested
                the application via unit and integration tests during final delivery.</p>
              <p>Tech: HLS, NodeJS, PugJS, DynamoDB, Docker, WinstonJS, Chai, Mocha, Sinon</p>
            </div>
          </div>
          <div className="project">
            <a href="https://github.com/ericfitzsimons451/palette-picker-ui">
              <img src={ palette } className="palette" alt="Palette Picker App" />
            </a>
          <div className="project-description">
            <a href="https://github.com/ericfitzsimons451/palette-picker-ui">
              <h3 className="project-heading">Palette Picker</h3>
            </a>
            <p>Full-stack single-page application allowing the user to randomly create
              and save color palettes.  Created endpoints for CRUD functionality,
              constructed a database, and adapted to the rigors of pre-styled components.</p>
            <p>Tech: NodeJS, Express, Knex, Postgres-QL, Material-UI, ReactJS, Redux, Travis-CI, Jest, Enzyme, Supertest</p>
          </div>
        </div> 
        <div className="project">
          <a href="https://github.com/ericfitzsimons451/movie-tracker-trs-ef">
            <img src={movie} className="movieTracker" alt="Movie Tracker App" />
          </a>
          <div className="project-description">
          <a href="https://github.com/ericfitzsimons451/movie-tracker-trs-ef">
            <h3 className="project-heading">Movie Tracker</h3>
          </a>
            <p>Netflix-style application for saving and displaying movie posters.
               A paired project, it required user authentication, and the implementation
               of Redux for state-management as well as API calls to fetch data.</p>
            <p>Tech: ReactJS, Redux, React Router, Jest, Enzyme, Sass</p>               
          </div>
        </div>
      </div>
    </div>
  )
};

export default Projects;

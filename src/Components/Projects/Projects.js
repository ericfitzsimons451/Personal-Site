// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';

// export default () => (
//   <Carousel>
//     <div>
//       <img src="../../Assets/stateOfTheChurch.png" alt="State of the Church" />
//       <p className="legend">State of the Church</p>
//     </div>
//     <div>
//       <img src="../../Assets/Palette.png" alt="Palette Picker"/>
//       <p className="legend">Palette Picker</p>
//     </div>
//     <div>
//       <img src="../../Assets/MovieTraker.png" alt="Movie TRacker"/>
//       <p className="legend">Movie Tracker</p>
//     </div>
//     <div>
//       GetSwole"><img src="../../Assets/getSwole.png" alt="Get Swole"/>
//       <p className="legend">Get Swole</p>
//     </div>
//   </Carousel>
// );

// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';

// export default () => (
//     <Carousel autoPlay>
//         <div>
//             <img src="../../Assets/stateOfTheChurch.png" alt="State of the Church" />
//                  <p className="legend">State of the Church</p>
//         </div>
//         {/* <div>
//             <img alt="" src="../../Assets/MovieTracker.png" />
//             <p className="legend">Legend 2</p>
//         </div>
//         <div>
//             <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
//             <p className="legend">Legend 3</p>
//         </div>
//         <div>
//             <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg" />
//             <p className="legend">Legend 4</p>
//         </div> */}
//     </Carousel>
// );








// class Carousel extends Component {
//     render() {
//         return (
//             <Carousel className="carousel">
//               <div>
//                 <a href="https://www.stateofthechurch.com"><img src="../../Assets/stateOfTheChurch.png" alt="State of the Church" />
//                 <p className="legend">State of the Church</p></a>
//               </div>
//               <div>
//                 <a href="https://github.com/ericfitzsimons451/Palette-Picker-API"><img src="../../Assets/Palette.png" alt="Palette Picker"/>
//                 <p className="legend">Palette Picker</p></a>
//               </div>
//               <div>
//                 <a href="https://github.com/ericfitzsimons451/movie-tracker-trs-ef"><img src="../../Assets/MovieTraker.png" alt="Movie TRacker"/>
//                 <p className="legend">Movie Tracker</p></a>
//               </div>
//                <div>
//                 <a href="https://github.com/ericfitzsimons451/JA-DC-EF-TA--GetSwole"><img src="../../Assets/getSwole.png" alt="Get Swole"/>
//                 <p className="legend">Get Swole</p></a>
//               </div>
//             </Carousel>
//         );
//     }
// };
 
// ReactDOM.render(<Projects />, document.querySelector('.demo-carousel')























import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="assets/1.jpeg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};

ReactDOM.render(<DemoCarousel />, document.querySelector('#root'));
export default DemoCarousel

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>

























// import React from 'react'
// import './Projects.scss'
// import church from '../../Assets/stateOfTheChurch.png'
// import palette from '../../Assets/Palette.png'

// const Projects = () => {
//   return (
//     <div className="projects">
//       <h2>Projects</h2>
//       <div className="project-container">
//         <a href="https://www.stateofthechurch.com" className="center">
//           <img src={church} className="church" alt="State of the Church" />
//         </a>
//         <div className="project-description">
//           <h3 className="heading">Barna's State of the Church</h3>
//           <h4>February - March 2020</h4>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
//         </div>
//       </div>
//       <div className="project-container">
//         <img src={church} className="entercom" alt="Entercom Streaming Audio" />
//           <div className="project-description">
//             <h3 className="heading">Entercom Streaming Audio</h3>
//             <h4>HLS Streaming Audio</h4>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
//           </div>
//         </div>
//         <div className="project-container">
//           <a href="https://github.com/ericfitzsimons451/palette-picker-ui" className="center">
//             <img src={palette} className="entercom" alt="Palette Picker" />
//           </a>
//         <div className="project-description">
//           <h3 className="heading">Palette Picker</h3>
//           <h4>Group Project</h4>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
//         </div>
//       </div>
//     </div>
//   )
// };

// export default Carousel;

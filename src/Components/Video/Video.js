import React, { Component } from 'react';
import '../Video/Video.scss'

class Video extends Component {
  render() { 
    return (
      <div className="video">
        <h2 className="video-heading">Lightning Talk to Turing Community</h2>
        <div className="iFrame-wrapper">
          <iframe src='https://www.youtube.com/embed/xW6EjaReyPU' 
            frameBorder='0'
            height="100%"
            width="100%"
            allow='autoplay; encrypted-media'
            allowFullScreen
            title='Eric Fitzsimons Github Talk'
            className="iFrame"
          />
        </div>
      </div>
    )
  }
}

export default Video;
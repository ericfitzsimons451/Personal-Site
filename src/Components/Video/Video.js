import React, { Component } from 'react';
import '../Video/Video.scss'

class Video extends Component {
  render() { 
    return <div className="video">
        <h2 className="video-heading">I absolutely love public speaking</h2>
        {/* <iframe src='https://www.youtube.com/embed/xW6EjaReyPU'  */}
          height='700'
          width='700'
          frameBorder='0'
          allow='autoplay; encrypted-media'
          allowFullScreen
          title='Eric Fitzsimons Github Talk'
          className="iFrame"
        />
      </div>

  }
}


export default Video;
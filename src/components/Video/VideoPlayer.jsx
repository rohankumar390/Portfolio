import React from 'react'
import ShakaPlayer from 'shaka-player-react';
import css from "./Video.module.scss";
import 'shaka-player/dist/controls.css';
import Vid1 from "./1.mp4";
import Vid2 from "./2.mp4";
import Vid3 from "./3.mp4";
const VideoPlayer = () => {
  return (
    <div>

      <div className={css.txt}>
        <span className="primaryText yPaddings ">Previous Projects</span>
      </div>
      <div className={css.loop}>
        <div className={css.newVid}>
          <h2 className={css.vidTxtt}> <u>Engineering</u> </h2> <br />
          <ShakaPlayer autoPlay src={Vid1} width="100px" className={css.vid} />
          <h2 className={css.viddTxt}> Netflix Engineering Explained </h2>
        </div>
       
        <div>
          <h2 className={css.vidTxtt} > <u>AI</u> </h2>
          <br />
          <ShakaPlayer autoPlay src={Vid2} width="100px" className={css.vid} />
          <h2 className={css.vidTxt} >How Spotify uses AI </h2>
        </div>
        <div>
        
          <h2 className={css.vidTxtt}><u>Startups</u> </h2> <br />
          <ShakaPlayer autoPlay src={Vid3} className={css.vid} />
          <h2 className={css.vidTxt}>Introducing Runway ML </h2>
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer
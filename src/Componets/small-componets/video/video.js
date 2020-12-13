import React from 'react';
import { Player, ControlBar } from 'video-react';

function Video({showVideo}){

  let video =null
  if(showVideo) {
    video = (
      <div>
        <Player
          autoPlay
          muted
          loop
          src="https://storage.googleapis.com/www.inputllc.net/kayaking.mp4"
        >
        <ControlBar disableCompletely={true}  className="my-class" />
        </Player>
      </div>
    )
  } else { video = null};


  
  return (
    <div>
        {video}
    </div>
  );
};

export default Video;
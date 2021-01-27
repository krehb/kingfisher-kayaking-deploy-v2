import React from 'react';
import { Player, ControlBar } from 'video-react';

function Video(){

  
  return (
    <div>
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
    </div>
  );
};

export default Video;
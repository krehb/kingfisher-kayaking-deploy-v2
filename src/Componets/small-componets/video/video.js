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
      <div className='videoTextContainer' >
        <div className='videoText'>
            Join us for a more peaceful paddling experience that will strengthen your connection to the river and its natural wonders. 
        </div>
      </div>
    </div>
  );
};

export default Video;
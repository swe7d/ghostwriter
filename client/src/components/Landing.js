import React, { Component } from 'react'
// import {Player,ControlBar} from 'video-react'
import YouTube from 'react-youtube';
//https://youtu.be/9WyZWvpZiB4
class Landing extends Component {
    videoOnReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
      render() {
        const opts = {
          height: '390',
          width: '640',
          playerVars: { // https://developers.google.com/youtube/player_parameters
            autoplay: 1
          }
        };
     
        return (
            <dev>
                <br></br>
                <br></br>
            <YouTube
            videoId="9WyZWvpZiB4"
            opts={opts}
            onReady={this._onReady}
            />
            </dev>
            
          
        );
      }
     
      
    }

export default Landing
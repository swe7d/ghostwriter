<<<<<<< HEAD
import React from 'react'
=======
import React, { Component } from 'react'
>>>>>>> addVideo
import useAuth from '../hooks/useAuth'
import hooks from '../hooks/useBooks'
import { useFirebase } from 'react-redux-firebase'
import YouTube from 'react-youtube';
<<<<<<< HEAD

const Landing = () => {
=======
class Landing extends Component {
    videoOnReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
 Landing = () => {
>>>>>>> addVideo
    const [token, auth] = useAuth()
    const firebase = useFirebase()
    if (firebase.auth().currentUser) {
        firebase.auth().currentUser.getIdToken(false)
        .then(token => {
            console.log(token)
        })

    }}

<<<<<<< HEAD
=======
    render() {
        const opts = {
          height: '390',
          width: '640',
          playerVars: { // https://developers.google.com/youtube/player_parameters
            autoplay: 1
          }
        };
     
>>>>>>> addVideo
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
<<<<<<< HEAD
        )
}
=======
            
          
        );
};}
>>>>>>> addVideo

export default Landing
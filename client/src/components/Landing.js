import React, { Component } from 'react'
import useAuth from '../hooks/useAuth'
//import hooks from '../hooks/useBooks'
import { useFirebase } from 'react-redux-firebase'
import YouTube from 'react-youtube';
class Landing extends Component {
    videoOnReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
 Landing = () => {
    const [token, auth] = useAuth()
    const firebase = useFirebase()
    if (firebase.auth().currentUser) {
        firebase.auth().currentUser.getIdToken(false)
        .then(token => {
            console.log(token)
        })

    }}

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
            <div>   
                <p>If you’ve been dreaming about writing your life story, dream no more—Ghostwriter makes it easy for anyone to write a book about their life, even if you have no professional writing experience. 
                </p>
                <p>With Ghostwriter, you can say goodbye to writer’s block or wondering what to write about next.  Just sign up for a free account and open the easy-to-use web app.  Next, choose the topics you’d like to write about—from your childhood to your travels to your family and professional life. 
                </p>
                <p>To guide you through your writing, Ghostwriter asks you a set of questions about each topic you’ve chosen.  All you have to do is answer the questions in the text boxes provided—Ghostwriter even gives you helpful tips on writing, ways to spark old memories, and ways to stay motivated as you write.
                </p>
                <p>And don’t worry if you can’t finish your story in one sitting—Ghostwriter automatically saves your story, so you can pick up where you left off at any time.
                </p>
                <p>When you’re done, just print out your story so you can share it with your friends and family. It’s just that simple.
                </p>
                <p>Your story and life lessons are too important to go untold.  Sign up for Ghostwriter now so you too can make your book a reality.
                </p>
            </div>
            <YouTube
            videoId="9WyZWvpZiB4"
            opts={opts}
            onReady={this._onReady}
            />
            </dev>
            
          
        );
};}


export default Landing
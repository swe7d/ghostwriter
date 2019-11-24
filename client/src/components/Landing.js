import React from 'react'
import useAuth from '../hooks/useAuth'
import hooks from '../hooks/useBooks'
import { useFirebase } from 'react-redux-firebase'
import YouTube from 'react-youtube';

const Landing = () => {
    const [token, auth] = useAuth()
    const firebase = useFirebase()
    if (firebase.auth().currentUser) {
        firebase.auth().currentUser.getIdToken(false)
        .then(token => {
            console.log(token)
        })

    }

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
        )
}

export default Landing
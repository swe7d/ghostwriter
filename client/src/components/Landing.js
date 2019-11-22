import React from 'react'
import useAuth from '../hooks/useAuth'
import hooks from '../hooks/useBooks'
import { useFirebase } from 'react-redux-firebase'


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
            <div>   
                landing
            </div>
        )
}

export default Landing
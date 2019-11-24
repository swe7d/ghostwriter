import React from 'react'
import useAuth from '../hooks/useAuth'
import hooks from '../hooks/useBooks'
import { useFirebase } from 'react-redux-firebase'


const Landing = () => {
        console.log(process.env.REACT_APP_API)

        return (
            <div>   
                landing
            </div>
        )
}

export default Landing
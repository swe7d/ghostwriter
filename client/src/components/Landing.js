import React from 'react'
import useAuth from '../hooks/useAuth'


const Landing = () => {
    const [token, tokenReady] = useAuth()
    if (tokenReady) {
        console.log(token)
    }

        return (
            <div>
                landing
            </div>
        )
}

export default Landing
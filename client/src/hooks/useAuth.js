import { useEffect, useState } from "react"
import { useSelector } from 'react-redux'
import axios from '../api/api'

// allows any component to subscribe to the authentication state of the app
const useAuth = () => {
    const [token, setToken] = useState('')

    const auth = useSelector(state => state.firebase.auth)  
    useEffect(() => {
        if (auth.stsTokenManager) {
            setToken(auth.stsTokenManager.accessToken)
        }
    }, [auth])

    return [token, auth]
}

export default useAuth
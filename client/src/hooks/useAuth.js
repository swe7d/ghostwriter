import { useEffect, useState } from "react"
import { useSelector } from 'react-redux'
import axios from '../api/api'

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
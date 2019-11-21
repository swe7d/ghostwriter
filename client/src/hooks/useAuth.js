import { useEffect, useState } from "react"
import { useSelector } from 'react-redux'
import axios from '../api/api'

const useAuth = () => {
    const [state, setState] = useState({
        token: null,
        auth: null,
    })
    const auth = useSelector(state => state.firebase.auth)

    useEffect(() => {
        if (auth.stsTokenManager) {
            setState({
                token: auth.stsTokenManager.accessToken,
                auth
            })
        }
    }, [auth])

    return [state.token, state.auth]
}

export default useAuth
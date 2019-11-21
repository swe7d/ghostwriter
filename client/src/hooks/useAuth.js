import { useEffect, useState } from "react"
import { useSelector } from 'react-redux'

const useAuth = () => {
    const [state, setState] = useState({
        token: null,
        tokenReady: false,
    })
    const auth = useSelector(state => state.firebase.auth)

    useEffect(() => {
        if (auth.stsTokenManager) {
            setState({
                token: auth.stsTokenManager.accessToken,
                tokenReady: true,
            })
        }
    }, [auth])

    return [state.token, state.tokenReady]
}

export default useAuth
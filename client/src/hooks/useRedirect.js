import useAuth from "./useAuth"
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

// allows any component to redirect to login, and then back after authentication 
const useRedirect = (from) => {
    const [_, auth] = useAuth()
    const history = useHistory()
    useEffect(() => {
        if (!auth.uid) {
            history.push({
                pathname: '/login',
                state: {from}
            })
        }
    }, [auth])
}

export default useRedirect
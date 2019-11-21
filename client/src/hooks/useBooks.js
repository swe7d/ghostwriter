import axios from '../api/api'
import { useEffect, useState } from 'react'
import useAuth from './useAuth'

const useNewBook = () => {
    const [authToken, tokenReady] = useAuth()

    const [state, setState] = useState({
        res: null,
        pending: true,
        error: null,
    })

    useEffect(() => {
        if (!tokenReady) {
            return
        }

        axios.post('books', null, {headers: {authorization: authToken}})
        .then(res => {
            setState({
                res: res.data,
                pending: false,
                error: null,
            })
        })
        .catch(err => {
            setState({
                res: null,
                pending: false,
                error: err,
            })
        })
    }, [tokenReady, authToken])
    
    return [state.res, state.pending, state.error]
}

export default useNewBook
import api from '../api/api'
import { useEffect, useState } from 'react'
import useAuth from './useAuth'

const useBooks = (id = null) => {
    const [token, _] = useAuth()

    const [state, setState] = useState({
        data: null,
        pending: true,
        error: null,
    })

    useEffect(() => {
        if(!token) {
            return
        }

        const url = id ? `/books/${id}` : '/books'

        api.get(url, {headers: {authorization: token}})
        .then(res => {
            console.log('got books:', res.data)
            setState({
                data: res.data,
                pending: false,
                error: null,
            })
        })
        .catch(err => {
            console.log(err)
            setState({
                data: null,
                pending: false,
                error: err,
            })
        })

    }, [token, id])

    return [state.data, state.pending, state.error]
}

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

        api.post('books', null, {headers: {authorization: authToken}})
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

export default {
    useBooks,
    useNewBook,
}
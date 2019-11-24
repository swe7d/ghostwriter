import api from '../api/api'
import { useEffect, useState } from 'react'
import useAuth from './useAuth'

const makeHeader = (token) => (
    {
        headers: {
            authorization: token
        }
    }
)

const bookEditFunctions = {
    getNewBook: async (name, token) => {
        try {
            const newBook = await api.post('books', {name}, makeHeader(token))
            return newBook
        } catch (err) {
            console.log({err})
        }
    }
}

const useBook = () => {
    const [token, _] = useAuth()

    const getBook = async (id) => {
        console.log('token get: ',token)
        const book = await api.get(`/books/${id}`, makeHeader(token))
        console.log('getting book: ', book.data)
        return book.data
    }

    const syncBook = (id, book) => {
        console.log('token put: ',token)
        console.log('syncing book: ', book)
        api.put(`/books/${id}`, book, makeHeader(token))
    }

    return [getBook, syncBook, !!token]
}

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

        api.get(url, makeHeader(token))
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
    const [authToken, _] = useAuth()

    const getNewBook = async (name) => {
        try{
            const doc = await api.post('books', {name}, {headers: {authorization: authToken}})
            return doc.data
        } catch (e) {
            return e
        }  
    }
        
    return getNewBook
}

export default {
    useBooks,
    useNewBook,
    useBook,
}
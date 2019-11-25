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

const useBook = () => {
    const [token, _] = useAuth()

    const getBook = async (id) => {
        const book = await api.get(`/books/${id}`, makeHeader(token))
        return book.data
    }

    const syncBook = (id, book) => {
        api.put(`/books/${id}`, book, makeHeader(token))
    }

    return [getBook, syncBook, !!token]
}

const useBooks = () => {
    const [token, _] = useAuth()
    const [books, setBooks] = useState(null)
    const [error, setError] = useState(null)

    const getBooks = () => {
        api.get(`/books`, makeHeader(token))
        .then(books => {
            setBooks(books.data)
        })
        .catch(err => {
            setError(err)
        })
    }

    const deleteBook = (id) => {
        api.delete(`/books/${id}`, makeHeader(token))
        .then(() => {
            getBooks()
        })
    }

    const changeTitle = (id, title) => {
        api.put(`/books/${id}`, {name: title}, makeHeader(token))
        .then(() => {
            getBooks()
        })
    }

    useEffect(() => {
        setBooks(null)
        setError(null)
        if (!token) return
        getBooks()

    }, [token])

    return [books, error, deleteBook, changeTitle]
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
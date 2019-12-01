import React, {useState} from 'react'
import BookHooks from './../../hooks/BookHooks'
import {useHistory} from 'react-router-dom'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import BookMenu from './BookMenu'
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Typography } from '@material-ui/core'
import useRedirect from '../../hooks/useRedirect'

export default function MyBooks(props) {
    useRedirect(props.location.pathname)
    const [books, booksError, deleteBook, changeTitle] = BookHooks.useBooks()
    const history = useHistory()

    const [menuAnchor, setMenuAnchor] = useState(null)
    const [bookId, setBookId] = useState(null)

    const redirect = (id) => {
        history.push(`/wizard/${id}`)
    }

    const openMenu = (e, id) => {
        setBookId(id)
        setMenuAnchor(e.target)
    }

    const handleDelete = id => {
        deleteBook(id)
        setMenuAnchor(null)
    }

    const handleTitleChange = (id, title) => {
        changeTitle(id, title)
        setMenuAnchor(null)
    }

    const handleClose = () => {
        setMenuAnchor(null)
    }

    return (
        <div>
        {/* <Typography variant="h3">Your Books</Typography> */}
          <List component="nav">

            {
                books && books.map((book, i) => (
                        <ListItem button key={i}>
                            <ListItemText onClick={() => redirect(book._id)}>
                                {book.name}
                            </ListItemText>
                            <ListItemSecondaryAction>
                                <IconButton onClick={(e) => openMenu(e, book._id)}>
                                    <MoreVertIcon></MoreVertIcon>
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
       
                ))
            }
                <BookMenu anchor={menuAnchor} bookId={bookId} handleClose={handleClose} handleDelete={handleDelete} handleTitleChange={handleTitleChange}></BookMenu>

                         </List>
        </div>
    )
}

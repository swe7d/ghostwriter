import React, {useState} from 'react'
import { Menu, MenuItem } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => (
    {
        delete: {
            color: 'red'
        },
        titleDialog: {
            minWidth: '300px'
        }
    }
))

export default function BookMenu(props) {
    const { anchor, handleClose, bookId, handleDelete, handleTitleChange } = props
    const classes = useStyles()

    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
    const [titleDialogOpen, setTitleDialogOpen] = useState(false)
    const [newTitle, setNewTitle] = useState('')

    const deleteBook = (id) => {
            handleDelete(id)
            setDeleteDialogOpen(false)
    }

    const changeTitle = (id, title) => {
        handleTitleChange(id, title)
        setTitleDialogOpen(false)
        setNewTitle('')
}

    return (
        <div>
      <Menu
        id="simple-menu"
        anchorEl={anchor}
        keepMounted
        open={Boolean(anchor)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => setTitleDialogOpen(true)}>Edit Title</MenuItem>
        <MenuItem onClick={() => setDeleteDialogOpen(true)}>Delete</MenuItem>
      </Menu>
      <Dialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Delete Book</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this book? This cannot be undone. 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)} color="primary">
            Cancel
          </Button>
          <Button className={classes.delete} onClick={() => deleteBook(bookId)} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={titleDialogOpen} onClose={() => setTitleDialogOpen(false)} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Title your new book</DialogTitle>
                <DialogContent className={classes.titleDialog}>
                    <DialogContentText>
                        Give your new book a title
          </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Book title"
                        value={newTitle}
                        onChange={e => setNewTitle(e.target.value)}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setTitleDialogOpen(false)} color="primary">
                        Cancel
          </Button>
                    <Button onClick={() => changeTitle(bookId, newTitle)} color="primary">
                        Save
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

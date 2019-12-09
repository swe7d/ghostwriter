import React, { useState } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import DialogActions from '@material-ui/core/DialogActions'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
    dialog: {
        minWidth: '500px',
    }
}))

export default function AddBookDialog(props) {
    const [title, setTitle] = useState('')

    const classes = useStyles()
    const { open } = props

    const handleClose = () => {
        props.handleClose()
    }

    const handleSave = (e) => {
        props.handleSave(title)
    }

    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Title your new book</DialogTitle>
                <DialogContent className={classes.dialog}>
                    <DialogContentText>
                        Give your new book a title
          </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Book title"
                        onChange = {e => setTitle(e.target.value)}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={handleSave} color="primary">
                        Create
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

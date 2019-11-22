import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { useFirebase } from 'react-redux-firebase';
import { useSelector } from 'react-redux'
import AddBookDialog from './AddBookDialog';
import useAuth from '../../hooks/useAuth';
import BookHooks from '../../hooks/useBooks'
import { useHistory } from 'react-router-dom'



const styles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        color: 'inherit',
        textDecoration: 'none',
    },
}));

const MainNavbar = (props) => {
    const classes = styles()
    const firebase = useFirebase()
    const [_, auth] = useAuth()

    const [dialogOpen, setDialogOpen] = useState(false)
    const getNewBook = BookHooks.useNewBook()
    const history = useHistory()

    const handleSave = (title) => {
        getNewBook(title)
        .then(doc => {
            const { bookId } = doc
            history.push(`/wizard/${bookId}`)
        })
        .catch(e => {
            console.log(e)
        })
        setDialogOpen(false)
    }

    const handleClose = () => {
        setDialogOpen(false)
    }

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography component={Link} to="/" variant="h6" className={classes.title}>
                        Ghost Writer
                         </Typography>
                    {
                        auth.uid ?
                        <div>
                        <Button color="inherit" onClick={() => setDialogOpen(true)}>
                        <AddIcon></AddIcon> New Book
                        </Button>
                        {/* <Button component={Link} to="/wizard" color="inherit">
                        Wizard
                        </Button> */}
                        <Button color="inherit" onClick={() => firebase.logout()}>
                            Logout
                        </Button>
                        <AddBookDialog open={dialogOpen} handleSave={handleSave} handleClose={handleClose}></AddBookDialog>

                        </div>
                        :
                        <div>
                        <Button component={Link} to="/Login" color="inherit">
                        Login
                        </Button>
                        <Button component={Link} to="/register" color="inherit">
                        Register
                        </Button>
                        </div>
                    }
 

                </Toolbar>
            </AppBar>
        </div>
    )
}


export default MainNavbar

import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom'

const styles = (theme) => ({
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
});

class MainNavbar extends Component {
    render() {
        const { classes } = this.props
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
                        <Button component={Link} to="/wizard" color="inherit">
                            Wizard
                        </Button>
                    </Toolbar>
                </AppBar>
            </div>  
        )
    }
}

export default withStyles(styles, { withTheme: true })(MainNavbar)

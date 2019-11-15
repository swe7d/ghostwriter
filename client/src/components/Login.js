import React, { Component } from 'react'
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';

const css = {
    title: {
        textAlign: 'center',
    },
    register: {
      textAlign: 'center',
      fontSize: 30
    }
}

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    input: {
      margin: theme.spacing(5),
    },
  }));

export default function Login() {
   
        return (
            <div>
                <h1 style={css.title}>GhostWriter Memoir</h1>
                <Input
        placeholder="*Email"
        className={useStyles().input}
        inputProps={{
          'aria-label': 'description',
        }}
      />
      <Input
        placeholder="*Password"
        className={useStyles().input}
        inputProps={{
          'aria-label': 'description',
        }}
      />
      <h4 style = {css.title} ><Button component={Link} to="/wizard" color="inherit">
                            Login
                        </Button></h4>
                        <h4 style = {css.title} ><Button component={Link} to="/register" color="inherit">
                            Don't Have An Account Yet?
                        </Button></h4>
            </div>
        )
}

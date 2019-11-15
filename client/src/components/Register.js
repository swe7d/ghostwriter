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


export default function Register() {
        return (
            <div>
                <h1 style={css.title}>Signup</h1>
                <Input
        placeholder="*First Name"
        className={useStyles().input}
        inputProps={{
          'aria-label': 'description',
        }}
      />
      <Input
        placeholder="*Last Name"
        className={useStyles().input}
        inputProps={{
          'aria-label': 'description',
        }}
      />
      <Input
        placeholder="Phone Number"
        className={useStyles().input}
        inputProps={{
          'aria-label': 'description',
        }}
      />
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
      <Input
        placeholder="*Confirm Password"
        className={useStyles().input}
        inputProps={{
          'aria-label': 'description',
        }}
      />     
         <h4 style = {css.title} ><Button component={Link} to="/login" color="inherit">
                            Register
                        </Button></h4>
            </div>
        )
    }

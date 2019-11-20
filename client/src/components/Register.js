import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import { useFirebase } from 'react-redux-firebase';
import { TextField } from '@material-ui/core';
import {Redirect} from 'react-router-dom'

const css = {
  title: {
    textAlign: 'center',
  },
  register: {
    textAlign: 'center',
    fontSize: 30
  }
}

function Register(props) {
  const [goHome, setGoHome] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState(null)

  const firebase = useFirebase()

  const registerUser = (e) => {
    e.preventDefault()

    firebase.createUser(
      {
      email,
      password,
    },
    {
      email,
      username: 'kaden',
    })
      .then(record => {
        console.log('hey buddy')
        console.log(record)
        setGoHome(true)
      })
      .catch(err => {
        setError(err)
      })
  }

  return (
    goHome ?
    <Redirect to="/"></Redirect>
    :
    <div>
      {error ?
      error.message
    :
    null}
      <h1 style={css.title}>Signup</h1>
      <form onSubmit={registerUser}>
      <TextField
          id="standard-full-width"
          label="Email"
          style={{ margin: 8 }}
          fullWidth
          margin="normal"
          onChange={e => setEmail(e.target.value)}

          InputLabelProps={{
            shrink: true,
          }}
        />
             <TextField
             type="password"
          id="standard-full-width"
          label="Password"
          style={{ margin: 8 }}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={e => setPassword(e.target.value)}

        />
                     <TextField
             type="password"
          id="standard-full-width"
          label="Confirm Password"
          style={{ margin: 8 }}
          fullWidth
          margin="normal"
          onChange={e => setConfirmPassword(e.target.value)}

          InputLabelProps={{
            shrink: true,
          }}
        />
      <h4 style={css.title} ><Button type="submit" disabled={password.length <= 6 || password !== confirmPassword}
        color="inherit"
        onClick={registerUser}
        >
        Register
                        </Button></h4>
                        </form>
    </div>
  )
}

export default Register
import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { useFirebase } from 'react-redux-firebase';
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

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [goHome, setGoHome] = useState(false)
  const [error, setError] = useState(null)

  const firebase = useFirebase()
  const login = (e) => {
    e.preventDefault()
    firebase.login({
      email,
      password
    })
    .then(() => {
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
      {error && error.message}
      <h1 style={css.title}>GhostWriter Memoir</h1>
      <form onSubmit={login}>
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
          onChange={e => setPassword(e.target.value)}

          InputLabelProps={{
            shrink: true,
          }}
        />
      {/* <TextField
        placeholder="*Email"
        className={useStyles.input}
        onChange={e => setEmail(e.target.value)}
        inputProps={{
          'aria-label': 'description',
        }}
      />
      <TextField
        type="password"
        placeholder="*Password"
        className={useStyles.input}
        onChange={e => setPassword(e.target.value)}
        inputProps={{
          'aria-label': 'description',
        }}
      /> */}
      <h4 style={css.title} ><Button type="submit" onClick={login} color="inherit">
        Login
                        </Button></h4>
      <h4 style={css.title} ><Button component={Link} to="/register" color="inherit">
        Don't Have An Account Yet?
                        </Button></h4>
                        </form>
    </div>
  )
}

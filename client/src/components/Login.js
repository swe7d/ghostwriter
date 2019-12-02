import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { useFirebase } from 'react-redux-firebase';
import {Redirect} from 'react-router-dom'
import useAuth from '../hooks/useAuth';

const css = {
  title: {
    textAlign: 'center',
  },
  register: {
    textAlign: 'center',
    fontSize: 30
  }
}

export default function Login(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const history = useHistory()

  const from = props.location.state ? props.location.state.from : null
  const [_, auth] = useAuth()
  useEffect(() => {
    if (auth.uid) {
      history.push(from ? from : '/')
    }
  }, [auth])


  const firebase = useFirebase()
  const login = (e) => {
    e.preventDefault()
    firebase.login({
      email,
      password
    })
    .catch(e => {
      setError(e)
    })

  }

  return (
 
    <div>
      {error && error.message}
      <h1 style={css.title}>Login</h1>
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

//check git
import React from 'react';
import './App.css';
import Landing from './components/Landing'
import Wizard from './components/Wizard'
import Register from './components/Register'
import Login from './components/Login'
import MainNavbar from './components/nav/MainNavbar'
import { Provider } from 'react-redux'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import purple from '@material-ui/core/colors/purple';

import { ThemeProvider } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

import { createStore, combineReducers } from 'redux'
import { ReactReduxFirebaseProvider, firebaseReducer } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore' // <- needed if using firestore

import firebase from 'firebase'
import useAuth from './hooks/useAuth';
import MyBooks from './components/mybooks/MyBooks';

var fbConfig = {
  apiKey: "AIzaSyCQUtSLY1PKmfMJM2rLrJie4wEify1gjDg",
  authDomain: "ghostwriter-f7e9d.firebaseapp.com",
  databaseURL: "https://ghostwriter-f7e9d.firebaseio.com",
  projectId: "ghostwriter-f7e9d",
  storageBucket: "ghostwriter-f7e9d.appspot.com",
  messagingSenderId: "398782157275",
  appId: "1:398782157275:web:cb112c1521f1970d7f57fe",
  measurementId: "G-C4GHKHJ0Q0"
};

if (process.env.REACT_APP_FIREBASE_CONFIG) {
  fbConfig = JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG)
}

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  // enableClaims: true // Get custom claims along with the profile
}

// Initialize firebase instance
firebase.initializeApp(fbConfig)

// Initialize other services on firebase instance
firebase.firestore() // <- needed if using firestore
// firebase.functions() // <- needed if using httpsCallable

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  // firestore: firestoreReducer // <- needed if using firestore
})

// Create store with reducers and initial state
const initialState = {}
const store = createStore(rootReducer, initialState)

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
}

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: purple,
  },
  status: {
    danger: 'orange',
  },
});

const MainView = () => {
  const [_, auth] = useAuth()
  return (
    auth.isLoaded || auth.uid ?

      <Router>
      <MainNavbar></MainNavbar>
      <Container maxWidth="sm">
        <Switch>
          <Route path="/wizard/:bookId" component={Wizard} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/mybooks" component={MyBooks} />
          <Route exact path="/" component={Landing} />
        </Switch>
      </Container>

    </Router>
    :
    null
  )
}

function App() {
  return (
    <div>
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
        <ThemeProvider theme={theme}>
    <MainView></MainView>
      </ThemeProvider>
        </ReactReduxFirebaseProvider>
      </Provider>

    </div>
  );
}

export default App;

export { store }
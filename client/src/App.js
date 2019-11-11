//check git
import React from 'react';
import './App.css';
import Landing from './components/Landing'
import Wizard from './components/Wizard'
import Register from './components/Register'
import MainNavbar from './components/nav/MainNavbar'
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

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: purple,
  },
  status: {
    danger: 'orange',
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Router>
          <MainNavbar></MainNavbar>
          <Container maxWidth="sm">
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/wizard" component={Wizard} />
              <Route path = "/register" component = {Register}/>
            </Switch>
          </Container>

        </Router>
      </ThemeProvider>

    </div>
  );
}

export default App;

import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import Home from './pages/Home';

// Components
import NotFound from '../NotFound/NotFound'

const LandingPageRouter = props => (
  <Switch>
    <Route
      exact path="/"
      component={Home}
    />
    
    <Route
      exact path="/home"
      component={Home}
    />
  

    <Route
      component={NotFound}
    />
  </Switch>
)


export default LandingPageRouter
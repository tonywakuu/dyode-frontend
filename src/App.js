import { Route, Switch, Router } from 'react-router-dom'
import { history } from './components/lib'
import LandingPage from './components/LandingPage/LandingPage';
import './App.css';

function App() {
  return (
    <Router history={history}>
    <Switch>
      <Route
        path="/"
        component={LandingPage}
      />
    </Switch>
  </Router>
  );
}

export default App;

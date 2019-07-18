import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
// import { Route } from 'react-router-dom';

import Home from './components/Home';
import MainNav from './components/MainNav';
import Login from './components/Login';
import SignUP from './components/SignUp';
import Recipe from './components/Recipe';
import Dashboard from './components/dashboard/Dashboard';
import ChefRecipeDetails from './components/projects/ChefRecipeDetails';
import ChefCreatePost from './components/projects/ChefCreatePost';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <MainNav />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route
            path="/chefrecipedetails/:id"
            component={ChefRecipeDetails}
          />
          <Route
            path="/chefcreatepost"
            component={ChefCreatePost}
          />
        </Switch>
        <Route exact path="/" component={Home} />
        <Route path="/recipe/:id" component={Recipe} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUP} />
      </Router>
    );
  }
}

export default App;

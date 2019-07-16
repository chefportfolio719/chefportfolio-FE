import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { Route } from 'react-router-dom';

import Home from './components/Home';
import MainNav from './components/MainNav';
import Login from './components/Login';
import SignUP from './components/SignUp';
import Recipe from './components/Recipe';
import './App.css';

class App extends React.Component {
  render() {
    return (
    <Router>
      <MainNav />
      <Route exact path='/' component={Home}></Route>
      <Route path='/recipe/:id' component={Recipe}></Route>
      <Route path='/login' component={Login}></Route>
      <Route path='/signup' component={SignUP}></Route>
    </Router>
    );
  }
}

export default App;

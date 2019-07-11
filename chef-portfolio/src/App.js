import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import './App.css';

class App extends React.Component {
  render() {
    return (
    <Router>
      <Route exact path='/' component={Home}></Route>
      <Route path='/login' component={Login}></Route>
    </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Login from './Components/Login';

import Register from './Components/Register';



 import { Container} from 'reactstrap';
import Chef from './Components/Chef';

class App extends Component {
  state = {
    isLoggedIn: false

  }

  componentDidMount() {
    if (!sessionStorage.getItem('isLoggedIn')) {
      this.setState({ 
        isLoggedIn: false
       })
    } else {
      this.setState({ 
        isLoggedIn: true
       })
    }
  }

  render() {
    return (
      <div className="App">
      <Container/>
      
       
      <Switch>
        
    
        <Route path='/login' render={() => 
        (this.state.isLoggedIn === true ? (<Redirect to='/' />) : ( <Login />))} />  {/**Ternary function, should direct chef to dashboard if registered and login credentials are correct */}

      

        {/* This is the component that holds login/signup */}
        <Route exact path='/' render={() => 
        (!this.state.isLoggedIn ? (<Redirect to='/login' />) : ( <Chef/> ))} />

        <Route exact path='/' component={Chef} />  {/** This should be replaced with the chef dashboard component */}
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        
        
      </Switch>
     
      </div>
      
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
})

export default connect(mapStateToProps, {})(App);

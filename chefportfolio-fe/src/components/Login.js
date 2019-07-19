import React, { Component } from 'react';
import '../App.css';
import brand from '../assets/ChefPortfolioBrand.png';

class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  // Handle Change
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  // Handle Submit
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <form
          onSubmit={this.handleSubmit}
          className="form-signin py-5 bg-dark text-white text-center rounded-lg"
        >
          <img
            className="brand"
            style={{ width: '100px' }}
            src={brand}
            alt="chef portfolio brand logo"
          />
          <h1 className="h3 my-5 font-weight-normal">
            Welcome back! Please sign in.
          </h1>
          <label htmlFor="inputEmail" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email"
            required
            autoFocus
            onChange={this.handleChange}
          />
          <label
            htmlFor="inputPassword"
            className="sr-only"
          >
            Password
          </label>
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required
            onChange={this.handleChange}
          />
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" />
              &nbsp; Remember me
            </label>
          </div>
          <button
            className="btn btn-lg py-4 mt-4 border border-white text-white btn-block"
            type="submit"
          >
            Sign in
          </button>
        </form>
      </div>
    );
  }
}

export default Login;

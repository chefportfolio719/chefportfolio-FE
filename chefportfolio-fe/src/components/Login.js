import React from 'react';
import '../App.css';
import brand from '../assets/ChefPortfolioBrand.png';

const Login = props => {
  return (
    <div className="container">
      <form className="form-signin py-5 bg-dark text-white text-center">
        <img
          className="brand"
          style={{ width: '100px' }}
          src={brand}
          alt="chef portfolio brand logo"
        />
        <h1 className="h3 my-5 font-weight-normal">
          Welcome back! Please sign in.
        </h1>
        <label for="inputEmail" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          required
          autofocus
        />
        <label for="inputPassword" className="sr-only">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required
        />
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" />
            &nbsp; Remember me
          </label>
        </div>
        <button
          class="btn btn-lg border border-white text-white btn-block"
          type="submit"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;

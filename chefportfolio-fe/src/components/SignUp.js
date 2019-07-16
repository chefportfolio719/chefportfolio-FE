import React from 'react';
import brand from '../assets/ChefPortfolioBrand.png';

const SignUp = props => {
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
          New? Please Register.
        </h1>
        <label for="inputFirstName" className="sr-only">
          First Name
        </label>
        <input
          type="text"
          id="inputFirstName"
          className="form-control"
          placeholder="First Name"
          required
          autofocus
        />
        <label for="inputLastName" className="sr-only">
          Last Name
        </label>
        <input
          type="text"
          id="inputLastName"
          className="form-control"
          placeholder="Last Name"
          required
          autofocus
        />
        <label for="inputLastName" className="sr-only">
          Mobile Number
        </label>
        <input
          type="text"
          id="inputMobile"
          className="form-control"
          placeholder="Mobile Phone Number"
          required
          autofocus
        />
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
          Register
        </button>
      </form>
    </div>
  );
};

export default SignUp;

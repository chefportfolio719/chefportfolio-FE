import React from 'react';
import { NavLink } from 'react-router-dom';
// import brand from '../../assets/ChefPortfolioBrand.png';
import '../../App.css';

const SignedOutLinks = props => {
  return (
    <nav className="main-nav">
      <div className="container main-nav">
        {/* <NavLink to="/">
          <img
            className="brand"
            style={{ width: '100px' }}
            src={brand}
            alt="chef portfolio brand logo"
          />
        </NavLink> */}
        <div>
          <NavLink to="/signup" className="main-nav-button">
            Sign Up
          </NavLink>
          <NavLink to="/login" className="main-nav-button">
            Chef Sign In
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default SignedOutLinks;

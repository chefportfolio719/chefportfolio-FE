import React from 'react';
import { NavLink } from 'react-router-dom';
import brand from '../assets/ChefPortfolioBrand.png';
import SignedInLinks from './layout/SignedInLinks';
import SignedOutLinks from './layout/SignedOutLinks';
import '../App.css';

const MainNav = props => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-dark py-4">
      <div className="container">
        <NavLink to="/">
          <img
            className="brand"
            style={{ width: '100px' }}
            src={brand}
            alt="chef portfolio brand logo"
          />
        </NavLink>

        {/* <NavLink to="/signup" className="main-nav-button">
            Sign Up
          </NavLink>
          <NavLink to="/login" className="main-nav-button">
            Chef Login
          </NavLink> */}
        <SignedOutLinks />
        <SignedInLinks />
      </div>
    </nav>
  );
};

export default MainNav;

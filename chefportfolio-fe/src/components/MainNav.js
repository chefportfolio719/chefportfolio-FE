import React from 'react';
import { Link } from 'react-router-dom';
import brand from '../assets/ChefPortfolioBrand.png';
import '../App.css';

const MainNav = props => {
  return (
    <nav className="main-nav">
      <div className="container main-nav">
        <Link to="/">
          <img
            className="brand"
            style={{ width: '100px' }}
            src={brand}
            alt="chef portfolio brand logo"
          />
        </Link>
        <div>
          <Link to="/signup" className="main-nav-button">
            Sign Up
          </Link>
          <Link to="/login" className="main-nav-button">
            Chef Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;

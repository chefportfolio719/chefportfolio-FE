import React from 'react';
import { NavLink } from 'react-router-dom';
// import brand from '../../assets/ChefPortfolioBrand.png';
import '../../App.css';

const SignedInLinks = props => {
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
          <NavLink
            to="/chefcreatepost"
            className="main-nav-button"
          >
            New Recipe
          </NavLink>
          <NavLink to="/" className="main-nav-button">
            Log Out
          </NavLink>
          <NavLink to="/" className="btn round-btn">
            UN
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default SignedInLinks;

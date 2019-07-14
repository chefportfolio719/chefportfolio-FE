import React from 'react';
import { Link } from 'react-router-dom';

const MainNav = props => {
  return (
    <nav className='main-nav'>
      <div class='container main-nav'>
        <Link to='/'>
          <h1>Chef Portfolio</h1>
        </Link>
        <div>
          <Link to='/signup' className='main-nav-button'>Sign Up</Link>
          <Link to='/login' className='main-nav-button'>Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
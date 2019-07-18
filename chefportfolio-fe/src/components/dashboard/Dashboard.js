import React, { Component } from 'react';
import Notifications from './Notifications';
import ChefRecipeList from '../projects/ChefRecipeList';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard container">
        <div className="row py-5">
          {/* Project List Column */}
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <ChefRecipeList />
          </div>
          {/* Notifications Column */}
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;

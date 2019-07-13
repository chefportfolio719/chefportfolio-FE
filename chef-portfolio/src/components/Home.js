import React from 'react';
import { connect } from 'react-redux';
import { getAllRecipes } from '../actions';

class Home extends React.Component {

  componentDidMount() {
    this.props.getAllRecipes();
  }

  render() {
    return (
      <div className='home-wrapper'>
        <h1>Chef Portfolio</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  }
}

export default connect(mapStateToProps, { getAllRecipes })(Home);
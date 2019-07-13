import React from 'react';
import { connect } from 'react-redux';
import { getAllRecipes } from '../actions';

import RecipeCard from './RecipeCard';

class Home extends React.Component {

  componentDidMount() {
    this.props.getAllRecipes();
  }

  render() {
    return (
      <div className='home-wrapper'>
        <h1>Chef Portfolio</h1>
        <div className='recipe-card-wrapper'>
          {this.props.recipes.map(recipe => (
          <RecipeCard key={recipe.id} {...recipe}/>
          ))}
        </div>
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
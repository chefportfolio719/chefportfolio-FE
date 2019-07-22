import React from 'react';
import { connect } from 'react-redux';
import { getAllRecipes } from '../actions';

class Recipe extends React.Component {

  componentDidMount() {
    this.props.getAllRecipes();
  }
  
  render() {
    const id = this.props.match.params.id;
    const recipe = this.props.recipes.find(recipe => recipe._id === id);

    if(this.props.recipes.length) {
      return (
      <div className='recipe-wrapper container'>
        <h1>{recipe.name}</h1>
        <img src={recipe.picture} alt={recipe.description}/>
        <div className='ingredients'>
          <p>Ingredients:</p>
          <p>{recipe.ingredients}</p>
        </div>
        <div className='instructions'>
          <p>Instructions:</p>
          <p>{recipe.instructions}</p>
        </div>
      </div>
      );
    } else {
      return null;
    }
  }
}


const mapStateToProps = state => {
  return {
    recipes: state.recipes
  };
};

export default connect(mapStateToProps, { getAllRecipes })(Recipe);
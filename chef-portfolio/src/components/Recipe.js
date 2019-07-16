import React from 'react';
import { connect } from 'react-redux';
import { getAllRecipes } from '../actions';

class Recipe extends React.Component {

  componentDidMount() {
    this.props.getAllRecipes();
  }
  
  render() {
    const id = this.props.match.params.id;
    console.log(typeof id, id);
    const recipe = this.props.recipes.find(recipe => recipe._id === id);
    console.log('this is the found object ', recipe);
    return (
      <div className='recipe-wrapper'>
        <h2>{recipe.name}</h2>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    recipes: state.recipes
  }
}

export default connect(mapStateToProps, { getAllRecipes })(Recipe);
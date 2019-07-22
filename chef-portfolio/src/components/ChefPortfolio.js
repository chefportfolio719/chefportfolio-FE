import React from 'react';
import { connect } from 'react-redux';
import { getAllRecipes } from '../actions';
import RecipeCard from './RecipeCard';

class ChefPortfolio extends React.Component {
    
  componentDidMount() {
    this.props.getAllRecipes();
  }
  render() {
    const chefId = this.props.match.params.id;
    const chefRecipes = this.props.recipes.filter(recipe => recipe.chef._id === chefId);

    if(this.props.recipes.length) {
      const firstName = chefRecipes[0].chef.firstname;
      const lastName = chefRecipes[0].chef.lastname;
      const location = chefRecipes[0].chef.location;
      
      return (
        <div className='chef-portfolio'>
          <h1 >{`${firstName} ${lastName}`}</h1>
          <h3 className='username'>{location}</h3>
          <div className='chef-recipes container'>
            {chefRecipes.map(recipe => (
              <RecipeCard key={recipe._id} { ...recipe }/>
            ))}
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

export default connect(mapStateToProps, { getAllRecipes })(ChefPortfolio);
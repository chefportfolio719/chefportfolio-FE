import React from 'react';
import { connect } from 'react-redux';
import { getAllRecipes } from '../actions';

import RecipeCard from './RecipeCard';
import Filter from './Filter';

class Home extends React.Component {

  state = {
    selected: 'All'
  };

  componentDidMount() {
    this.props.getAllRecipes();
  }

  selectFoodType = (event) => {
    const selectedTab = event.target.innerHTML;
    this.setState({ selected: selectedTab });
  }

  render() {
    // Breakfast Filter
    if(this.state.selected === 'Breakfast') {
      const breakfast = this.props.recipes.filter(recipe => recipe.breakfast === true);

      return (
        <div className='home-wrapper container'>
          <Filter selectFoodType={this.selectFoodType} />
          
          <div className='recipe-card-wrapper'>
            
            {breakfast.map(recipe => (
              <RecipeCard key={recipe._id} {...recipe} selected={this.state}/>
            ))}
          </div>
        </div>
      );
      // Lunch Filter
    }
    
    if(this.state.selected === 'Lunch') {
      const lunch = this.props.recipes.filter(recipe => recipe.lunch === true);

      return (
        <div className='home-wrapper container'>
          <Filter selectFoodType={this.selectFoodType} />
          
          <div className='recipe-card-wrapper'>
            
            {lunch.map(recipe => (
              <RecipeCard key={recipe._id} {...recipe} />
            ))}
          </div>
        </div>
      );
      // Dinner Filter
    }
    
    if(this.state.selected === 'Dinner') {
      const dinner = this.props.recipes.filter(recipe => recipe.dinner === true);

      return (
        <div className='home-wrapper container'>
          <Filter selectFoodType={this.selectFoodType} />
          
          <div className='recipe-card-wrapper'>
            
            {dinner.map(recipe => (
              <RecipeCard key={recipe._id} {...recipe} />
            ))}
          </div>
        </div>
      ); 
      // Dessert Filter
    } 
    
    if (this.state.selected === 'Dessert') {
      const dessert = this.props.recipes.filter(recipe => recipe.dessert === true);

      return (
        <div className='home-wrapper container'>
          <Filter selectFoodType={this.selectFoodType} />
          
          <div className='recipe-card-wrapper'>
            
            {dessert.map(recipe => (
              <RecipeCard key={recipe._id} {...recipe} />
            ))}
          </div>
        </div>
      ); 
    } 
    
    if (this.state.selected === 'Snack') {
      const snack = this.props.recipes.filter(recipe => recipe.snack === true);
      return (
        <div className='home-wrapper container'>
          <Filter selectFoodType={this.selectFoodType} />
          
          <div className='recipe-card-wrapper'>
            
            {snack.map(recipe => (
              <RecipeCard key={recipe._id} {...recipe} />
            ))}
          </div>
        </div>
      ); 
    } else {
      return (
        <div className='home-wrapper container'>
          <Filter selectFoodType={this.selectFoodType} />
          
          <div className='recipe-card-wrapper'>
            {this.props.recipes.map(recipe => (
              <RecipeCard key={recipe._id} {...recipe} />
            ))}
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  }
}

export default connect(mapStateToProps, { getAllRecipes })(Home);
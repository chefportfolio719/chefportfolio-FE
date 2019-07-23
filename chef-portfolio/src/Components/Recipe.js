import React from 'react';
import {connect} from 'react-redux';
import {deleteRecipe} from '../Actions/index'
import RecipeIngredients from './RecipeIngredients';


const Recipe = ({recipe}) =>{
    console.log(recipe)
    const deleteClickHandler = (e) => {
        e.preventDefault();
        deleteRecipe(recipe._id);
      
    }

     
    return (
        <div>
    {recipe && 

<div className="recipe_div">
     <p> {recipe.chef}{recipe.name}</p>
     <h1>{recipe.mealtype}</h1>
     <RecipeIngredients ingredients = {recipe.ingredients} />
     <h3>{recipe.instructions}</h3>
     <h4>{recipe.picture}</h4>
     <h5>{recipe.description}</h5>
     
     

</div>

    }
        <button onClick={deleteClickHandler}> Delete Reicpe! </button>

    </div>
    )

}
const mapStateToProps = () => ({});
export default connect(mapStateToProps, {deleteRecipe})(Recipe);
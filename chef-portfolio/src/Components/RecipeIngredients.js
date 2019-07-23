import React from 'react'

const RecipeIngredients = ({ingredients}) => {
  const ingredientsList = ingredients.split(',')
  return (
    
    <ul>
        { ingredients && ingredientsList.map((ingredient, index) => <li key = {index}>{ingredient}</li>)}
      
    </ul>

  )
}

export default RecipeIngredients;
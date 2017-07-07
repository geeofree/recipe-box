import React from 'react'

const SelectedRecipe = ({ recipe }) => (
  <div className="selected-recipe">
    <div className="recipe-image" style={{ backgroundImage: `url(${recipe.imgURL})` }} />

    <div className="recipe-info">
      <h2>{recipe.name}</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  </div>
)

export default SelectedRecipe

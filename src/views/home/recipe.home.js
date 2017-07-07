import React from 'react'

const SelectedRecipe = ({ recipe }) => (
  <div>
    <img src={recipe.imgURL} />
    <h2>{recipe.name}</h2>
    <ul>
      {recipe.ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
      ))}
    </ul>
  </div>
)

export default SelectedRecipe

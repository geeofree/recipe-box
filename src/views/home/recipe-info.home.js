import React from 'react'

const RecipeInfo = ({ recipe }) => (
  <div className="recipe-container">
    <Image url={recipe.imgURL} />
    <Info name={recipe.name} ingredients={recipe.ingredients} />
  </div>
)

export default RecipeInfo

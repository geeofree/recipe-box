import React from 'react'

const Ingredients = ({ items }) => {
  const ingredients = items.filter(val => val).map((ingredient, index) => <li key={index}>{ingredient}</li>)
  return ingredients.length ? <ul>{ingredients}</ul> : <p>This recipe has no ingredients.</p>
}

const SelectedRecipe = ({ recipe }) => (
  <div className="selected-recipe">
    <div className="recipe-img" style={{ backgroundImage: `url(${recipe.imgURL})` }} />
    <div className="recipe-info">
      <h2>{recipe.name}</h2>

      <div className="ingredients">
        <h3>Ingredients</h3>
        <Ingredients items={recipe.ingredients} />
      </div>
    </div>
  </div>
)

export default SelectedRecipe

import React from 'react'

const Ingredients = ({ items }) => {
  const ingredients = items.filter(val => val).map((ingredient, index) => <li key={index}>{ingredient}</li>)
  return ingredients.length ? <ul>{ingredients}</ul> : <p>This recipe has no ingredients.</p>
}

const RecipeImg = ({ url }) => (
  <div className="recipe-img" style={{ backgroundImage: `url(${url})` }} />
)

const Info = ({ name, ingredients }) => (
  <div className="recipe-info">
    <h2>{name}</h2>
    <div className="ingredients">
      <h3>Ingredients</h3>
      <Ingredients items={ingredients} />
    </div>
  </div>
)

const RecipeInfo = ({ recipe }) => (
  <div className="recipe-container">
    <RecipeImg url={recipe.imgURL} />
    <Info name={recipe.name} ingredients={recipe.ingredients} />
  </div>
)

export default RecipeInfo

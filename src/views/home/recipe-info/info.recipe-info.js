import React from 'react'

import Ingredients from './ingredients.recipe-info'

const Info = ({ name, ingredients }) => (
  <div className="recipe-info">
    <h2>{name}</h2>
    <div className="ingredients">
      <h3>Ingredients</h3>
      <Ingredients items={ingredients} />
    </div>
  </div>
)

export default Info

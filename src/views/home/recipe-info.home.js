import React from 'react'

import Image from './recipe-info/image.recipe-info'
import Info  from './recipe-info/info.recipe-info'


const RecipeInfo = ({ recipe }) => (
  <div className="recipe-container">
    <Image url={recipe.imgURL} />
    <Info name={recipe.name} ingredients={recipe.ingredients} />
  </div>
)

export default RecipeInfo

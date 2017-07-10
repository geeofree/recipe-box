import React from 'react'

import RecipeInfo    from './recipe-info.home'
import RecipeOptions from './recipe-options.home'

const SelectedRecipe = ({ recipe }) => (
  <div className="selected-recipe">
    <RecipeInfo recipe={recipe} />
    <RecipeOptions />
  </div>
)

export default SelectedRecipe

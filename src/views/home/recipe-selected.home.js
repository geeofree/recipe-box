import React            from 'react'
import { connect }      from 'react-redux'
import { removeRecipe } from '../../actions/recipe.action'

import RecipeInfo    from './recipe-info.home'
import RecipeOptions from './recipe-options.home'


const SelectedRecipeLayout = ({ recipe, deleteRecipe }) => (
  <div className="selected-recipe">
    <RecipeInfo recipe={recipe} />
    <RecipeOptions recipeID={recipe.id} deleteRecipe={deleteRecipe} />
  </div>
)


const mapDispatchToProps = (dispatch) => ({
  deleteRecipe: (id) => dispatch(removeRecipe(id))
})

const SelectedRecipe = connect(null, mapDispatchToProps)(SelectedRecipeLayout)
export default SelectedRecipe

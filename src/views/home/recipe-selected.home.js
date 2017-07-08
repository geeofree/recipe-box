import React            from 'react'
import { connect }      from 'react-redux'
import { removeRecipe } from '../../actions/recipe.action'

import RecipeInfo from './recipe-info.home'

const SelectedRecipeLayout = ({ recipe, deleteRecipe }) => (
  <div className="selected-recipe">
    <RecipeInfo recipe={recipe} />

    <div className="selected-recipe-buttons">
      <button className="edit-recipe">Edit</button>
      <button
        className="delete-recipe"
        onClick={() => deleteRecipe(recipe.id)}>
          Delete
      </button>
    </div>
  </div>
)


const mapDispatchToProps = (dispatch) => ({
  deleteRecipe: (id) => dispatch(removeRecipe(id))
})

const SelectedRecipe = connect(null, mapDispatchToProps)(SelectedRecipeLayout)
export default SelectedRecipe

import React from 'react'
import { connect }      from 'react-redux'
import { removeRecipe } from '../../actions/recipe.action'

const RecipeOptionsLayout = ({ recipeID, deleteRecipe, toggleEdit }) => (
  <div className="selected-recipe-buttons">
    <button
      className="edit-recipe"
      onClick={() => toggleEdit()}>
        Edit
    </button>
    <button
      className="delete-recipe"
      onClick={() => deleteRecipe(recipeID)}>
        Delete
    </button>
  </div>
)

const mapDispatchToProps = (dispatch) => ({
  deleteRecipe: (id) => dispatch(removeRecipe(id)),
  toggleEdit: () => dispatch('TOGGLE_EDIT')
})

const RecipeOptions = connect(null, mapDispatchToProps)(RecipeOptions)
export default RecipeOptions

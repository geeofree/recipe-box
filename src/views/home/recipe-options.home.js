import React from 'react'
import { connect } from 'react-redux'
import { removeRecipe, toggleEdit } from '../../actions/recipe.action'

const RecipeOptionsLayout = ({ recipeID, isEditting, deleteRecipe, toggleEdit }) => (
  <div className="selected-recipe-buttons">
    <button
      className="edit-recipe"
      onClick={() => toggleEdit(!isEditting)}>
        Edit
    </button>
    <button
      className="delete-recipe"
      onClick={() => deleteRecipe(recipeID)}>
        Delete
    </button>
  </div>
)

const mapStoreToProps = (store) => ({
  isEditting: store.recipes.isEditting
})

const mapDispatchToProps = (dispatch) => ({
  deleteRecipe: (id) => dispatch(removeRecipe(id)),
  toggleEdit: (bool) => dispatch(toggleEdit(bool))
})

const RecipeOptions = connect(mapStoreToProps, mapDispatchToProps)(RecipeOptionsLayout)
export default RecipeOptions

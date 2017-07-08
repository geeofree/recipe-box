import React from 'react'

const RecipeOptions = ({ recipeID, deleteRecipe }) => (
  <div className="selected-recipe-buttons">
    <button className="edit-recipe">Edit</button>
    <button
      className="delete-recipe"
      onClick={() => deleteRecipe(recipeID)}>
        Delete
    </button>
  </div>
)

export default RecipeOptions

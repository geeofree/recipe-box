import React from 'react'

import { connect } from 'react-redux'
import { getRecipe } from '../../actions/recipe.action'


const RecipeListLayout = ({ recipes, getRecipe }) => (
  <div className="recipe-list">
    {recipes.map((recipe, id) => (
      <p
        key={id}
        className="recipe-item"
        onClick={e => getRecipe(recipe.id)}>
          {recipe.name}
      </p>
    ))}
  </div>
)

const mapDispatchToProps = (dispatch) => ({
  getRecipe: (id) => dispatch(getRecipe(id))
})

const RecipeList = connect(null, mapDispatchToProps)(RecipeListLayout)
export default RecipeList

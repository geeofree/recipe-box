import React from 'react'

import { connect } from 'react-redux'
import { getRecipe } from '../../actions/recipe.action'


const RecipeListLayout = ({ recipes, selectedRecipe, getRecipe }) => (
  <div className="recipe-list">
    {recipes.map((recipe, id) => (
      <p
        key={id}
        className={ selectedRecipe.id === recipe.id ? "recipe-item --active" : " recipe-item" }
        onClick={e => getRecipe(recipe.id)}>
          {recipe.name}
      </p>
    ))}
  </div>
)

const mapStoreToProps = (store) => ({
  selectedRecipe: store.recipes.selected
})

const mapDispatchToProps = (dispatch) => ({
  getRecipe: (id) => dispatch(getRecipe(id))
})

const RecipeList = connect(mapStoreToProps, mapDispatchToProps)(RecipeListLayout)
export default RecipeList

import { showRecipe, changeRecipe, toggleEditting } from '../actions/recipe.actions'

export default (recipeId, newRecipeData) => (dispatch) => {
	dispatch(changeRecipe(recipeId, newRecipeData))
	dispatch(showRecipe(recipeId))
	dispatch(toggleEditting(false))
}

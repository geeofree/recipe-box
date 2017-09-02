import { removeRecipe } from '../actions/recipe.actions'
import resetDefaults from './resetDefaults'

export default (recipeId) => (dispatch) => {
	dispatch(removeRecipe(recipeId))
	dispatch(resetDefaults())
}

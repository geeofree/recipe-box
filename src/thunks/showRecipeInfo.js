import { showModal }   from '../actions/modal.actions'
import { RECIPE_INFO } from '../types/modal.types'
import { showRecipe }  from '../actions/recipe.actions'

export default (recipeId) => (dispatch) => {
	dispatch(showRecipe(recipeId))
	dispatch(showModal(RECIPE_INFO))
}
